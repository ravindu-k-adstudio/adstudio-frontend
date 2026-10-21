
import React, { useEffect, useState } from "react";
import { Image as KonvaImage, Rect, Shape } from "react-konva";

function drawOverlay(ctx, shape, width, height) {
    const w = width;
    const h = height;

    ctx.beginPath();

    switch (shape) {
        case "right":
            ctx.moveTo(w * 0.33, 0);
            ctx.lineTo(w, 0);
            ctx.lineTo(w, h);
            ctx.lineTo(w * 0.53, h);
            ctx.closePath();
            break;

        case "diagonal":
            ctx.moveTo(0, 0);
            ctx.lineTo(w * 0.76, 0);
            ctx.lineTo(w * 0.52, h);
            ctx.lineTo(0, h);
            ctx.closePath();
            break;

        case "curve":
            ctx.moveTo(0, 0);
            ctx.lineTo(w * 0.43, 0);
            ctx.bezierCurveTo(
                w * 0.9, h * 0.25,
                w * 0.28, h * 0.72,
                w * 0.48, h
            );
            ctx.lineTo(0, h);
            ctx.closePath();
            break;

        case "circle":
            ctx.arc(0, h * 0.5, Math.max(w, h) * 0.65, 0, Math.PI * 2);
            break;

        case "bottom":
            ctx.moveTo(0, h * 0.48);
            ctx.lineTo(w, h * 0.22);
            ctx.lineTo(w, h);
            ctx.lineTo(0, h);
            ctx.closePath();
            break;

        case "top":
            ctx.moveTo(0, 0);
            ctx.lineTo(w, 0);
            ctx.lineTo(w, h * 0.52);
            ctx.lineTo(0, h * 0.72);
            ctx.closePath();
            break;

        case "split":
            ctx.moveTo(0, 0);
            ctx.lineTo(w * 0.4, 0);
            ctx.lineTo(w * 0.32, h);
            ctx.lineTo(0, h);
            ctx.closePath();

            ctx.moveTo(w * 0.68, 0);
            ctx.lineTo(w, 0);
            ctx.lineTo(w, h);
            ctx.lineTo(w * 0.6, h);
            ctx.closePath();
            break;

        case "corner":
            ctx.moveTo(0, 0);
            ctx.lineTo(w * 0.6, 0);
            ctx.lineTo(0, h * 0.72);
            ctx.closePath();
            break;

        case "wave":
            ctx.moveTo(0, 0);
            ctx.lineTo(w * 0.66, 0);
            ctx.bezierCurveTo(
                w * 0.52, h * 0.25,
                w * 0.63, h * 0.35,
                w * 0.49, h * 0.52
            );
            ctx.bezierCurveTo(
                w * 0.4, h * 0.68,
                w * 0.38, h * 0.84,
                w * 0.25, h
            );
            ctx.lineTo(0, h);
            ctx.closePath();
            break;

        case "full":
            ctx.rect(0, 0, w, h);
            break;

        case "minimal":
            ctx.moveTo(0, 0);
            ctx.lineTo(w * 0.42, 0);
            ctx.lineTo(w * 0.3, h);
            ctx.lineTo(0, h);
            ctx.closePath();
            break;

        case "left":
        default:
            ctx.moveTo(0, 0);
            ctx.lineTo(w * 0.67, 0);
            ctx.lineTo(w * 0.47, h);
            ctx.lineTo(0, h);
            ctx.closePath();
            break;
    }
}

export default function BusinessPhotoCanvasBackground({
    background,
    width,
    height,
}) {
    const [image, setImage] = useState(null);
    const [loadFailed, setLoadFailed] = useState(false);

    useEffect(() => {
        setImage(null);
        setLoadFailed(false);

        if (!background?.src || typeof window === "undefined") {
            return undefined;
        }

        let cancelled = false;
        const img = new window.Image();

        img.crossOrigin = "anonymous";

        img.onload = () => {
            if (!cancelled) {
                setImage(img);
                setLoadFailed(false);
            }
        };

        img.onerror = () => {
            if (!cancelled) {
                setImage(null);
                setLoadFailed(true);
                console.error(
                    "Business background image failed to load:",
                    background.src
                );
            }
        };

        img.src = background.src;

        return () => {
            cancelled = true;
            img.onload = null;
            img.onerror = null;
        };
    }, [background?.src]);

    if (!background || width <= 0 || height <= 0) {
        return null;
    }

    const color = background.color || "#FFFFFF";
    const opacity = Math.max(
        0,
        Math.min(100, Number(background.opacity ?? 88))
    ) / 100;

    const shape = background.shape || "left";

    return (
        <>
            {image ? (
                <KonvaImage
                    image={image}
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                    listening={false}
                    perfectDrawEnabled={false}
                />
            ) : (
                <Rect
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                    fill={loadFailed ? "#e5e7eb" : "#f1f5f9"}
                    listening={false}
                    perfectDrawEnabled={false}
                />
            )}

            <Shape
                x={0}
                y={0}
                width={width}
                height={height}
                fill={color}
                opacity={opacity}
                listening={false}
                perfectDrawEnabled={false}
                sceneFunc={(ctx, konvaShape) => {
                    drawOverlay(ctx, shape, width, height);
                    ctx.fillStrokeShape(konvaShape);
                }}
            />
        </>
    );
}
