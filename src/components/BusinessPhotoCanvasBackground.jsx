
import React, { useEffect, useState } from "react";
import { Image as KonvaImage, Rect } from "react-konva";

const OVERLAY_COLORS = {
    light: [255, 255, 255],
    dark: [10, 12, 18],
    warm: [255, 246, 231],
    cool: [235, 245, 255],
    soft: [255, 255, 255],
    minimal: [255, 255, 255],
};

const OVERLAY_OPACITY = {
    light: 0.96,
    dark: 0.92,
    warm: 0.95,
    cool: 0.95,
    soft: 0.88,
    minimal: 0.98,
};

export default function BusinessPhotoCanvasBackground({
    background,
    width,
    height,
}) {
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (!background?.src || typeof window === "undefined") {
            setImage(null);
            return;
        }

        let cancelled = false;
        const img = new window.Image();
        img.crossOrigin = "anonymous";

        img.onload = () => {
            if (!cancelled) setImage(img);
        };

        img.onerror = () => {
            if (!cancelled) setImage(null);
            console.error("Could not load business photo background:", background.src);
        };

        img.src = background.src;

        return () => {
            cancelled = true;
            img.onload = null;
            img.onerror = null;
        };
    }, [background?.src]);

    if (!background || width <= 0 || height <= 0) return null;

    const [r, g, b] = OVERLAY_COLORS[background.overlay] || OVERLAY_COLORS.light;
    const opacity = OVERLAY_OPACITY[background.overlay] ?? 0.96;
    const solid = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    const transparent = `rgba(${r}, ${g}, ${b}, 0)`;

    // The photo sits on the right, leaving the left side for text,
    // or on the left, leaving the right side for text.
    const gradientStops =
        background.layout === "left"
            ? [0, transparent, 0.28, transparent, 0.58, solid, 1, solid]
            : [0, solid, 0.42, solid, 0.72, transparent, 1, transparent];

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
                    fill="#f0f2f5"
                    listening={false}
                />
            )}

            <Rect
                x={0}
                y={0}
                width={width}
                height={height}
                fillLinearGradientStartPoint={{ x: 0, y: 0 }}
                fillLinearGradientEndPoint={{ x: width, y: 0 }}
                fillLinearGradientColorStops={gradientStops}
                listening={false}
                perfectDrawEnabled={false}
            />
        </>
    );
}
