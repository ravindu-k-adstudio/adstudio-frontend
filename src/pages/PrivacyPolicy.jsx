import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShieldCheck, RotateCcw, FileText, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  const Card=({id,title,icon:Icon,children})=>(
    <section id={id} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-5">
        <Icon className="text-cyan-400"/>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="space-y-5 text-gray-300 leading-8">{children}</div>
    </section>
  );
  return (
  <div className="min-h-screen bg-gradient-to-b from-[#081320] via-[#0b1f33] to-[#081320] text-white">
    <Navbar/>
    <section className="pt-28 pb-12 px-6 text-center max-w-5xl mx-auto">
      <ShieldCheck className="mx-auto text-cyan-400" size={54}/>
      <h1 className="text-5xl font-bold mt-4">Policies & Legal Information</h1>
      <p className="mt-5 text-gray-300">These policies apply to AdStudio, a Software-as-a-Service platform that enables users to create, save and download digital advertisement designs.</p>
      <p className="text-sm text-gray-400 mt-3">Last Updated: July 2026</p>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a href="#refund" className="px-5 py-2 rounded-full bg-cyan-500/20 border border-cyan-400">Refund Policy</a>
        <a href="#privacy" className="px-5 py-2 rounded-full bg-cyan-500/20 border border-cyan-400">Privacy Policy</a>
        <a href="#terms" className="px-5 py-2 rounded-full bg-cyan-500/20 border border-cyan-400">Terms & Conditions</a>
      </div>
    </section>
    <main className="max-w-5xl mx-auto px-6 pb-20 space-y-10">
      <Card id="refund" title="Refund Policy" icon={RotateCcw}>
        <p>Thank you for choosing AdStudio. AdStudio provides subscription-based access to an online advertisement design platform and downloadable digital advertisement designs. Because our products are digital services, this Refund Policy differs from policies used for physical goods.</p>
        <h3 className="text-white font-semibold text-xl">Eligibility</h3>
        <p>Refund requests must be submitted within 7 days of payment. Requests should include your registered email address and payment details.</p>
        <h3 className="text-white font-semibold text-xl">When Refunds Are Granted</h3>
        <ul className="list-disc ml-6">
          <li>Duplicate payments.</li>
          <li>Technical issues preventing access where AdStudio cannot provide a solution.</li>
          <li>Accidental subscription purchase reported promptly.</li>
        </ul>
        <h3 className="text-white font-semibold text-xl">Non-Refundable</h3>
        <ul className="list-disc ml-6">
          <li>Downloaded digital designs.</li>
          <li>Subscription periods already used.</li>
          <li>Change of mind after using premium features.</li>
          <li>Violations of our Terms.</li>
        </ul>
        <h3 className="text-white font-semibold text-xl">Processing</h3>
        <p>Approved refunds are processed to the original payment method, generally within 7-14 business days depending on the payment provider.</p>
      </Card>

      <Card id="privacy" title="Privacy Policy" icon={ShieldCheck}>
        <p>AdStudio respects your privacy and is committed to protecting your personal information.</p>
        <h3 className="text-white font-semibold text-xl">Information We Collect</h3>
        <ul className="list-disc ml-6">
          <li>Name and email address.</li>
          <li>Encrypted password.</li>
          <li>Saved advertisement projects.</li>
          <li>Uploaded images and assets.</li>
          <li>Subscription and payment status.</li>
          <li>IP address, browser and device information.</li>
        </ul>
        <h3 className="text-white font-semibold text-xl">How We Use Information</h3>
        <ul className="list-disc ml-6">
          <li>Create and manage accounts.</li>
          <li>Save and restore designs.</li>
          <li>Process subscriptions.</li>
          <li>Provide support.</li>
          <li>Improve platform performance and security.</li>
          <li>Prevent fraud.</li>
        </ul>
        <h3 className="text-white font-semibold text-xl">Payments</h3>
        <p>Payments are securely processed by PayHere. AdStudio does not store your complete card or banking details.</p>
        <h3 className="text-white font-semibold text-xl">Sharing</h3>
        <p>We never sell your personal information. Data may be shared only with trusted service providers, payment processors, cloud hosting providers, or when required by law.</p>
        <h3 className="text-white font-semibold text-xl">Cookies</h3>
        <p>Cookies are used for authentication, preferences, analytics and improving user experience.</p>
        <h3 className="text-white font-semibold text-xl">Security</h3>
        <p>We use industry-standard safeguards including HTTPS encryption and secure storage. No online system can guarantee absolute security.</p>
      </Card>

      <Card id="terms" title="Terms & Conditions" icon={FileText}>
        <p>By creating an account or using AdStudio you agree to these Terms.</p>
        <h3 className="text-white font-semibold text-xl">Accounts</h3>
        <ul className="list-disc ml-6">
          <li>You must provide accurate information.</li>
          <li>You are responsible for keeping your login credentials secure.</li>
          <li>You must not use the platform for illegal or abusive purposes.</li>
        </ul>
        <h3 className="text-white font-semibold text-xl">Service</h3>
        <p>AdStudio provides online tools for creating, editing, saving and downloading digital advertisement designs. We may add, remove or modify features at any time.</p>
        <h3 className="text-white font-semibold text-xl">Subscriptions & Payments</h3>
        <p>Premium downloads and subscription plans require payment. Prices may change without prior notice. Payments are securely handled through PayHere.</p>
        <h3 className="text-white font-semibold text-xl">Intellectual Property</h3>
        <p>The AdStudio platform, branding, software, logos and original content remain the property of AdStudio. Users retain ownership of original designs they create using legally obtained content.</p>
        <h3 className="text-white font-semibold text-xl">Limitation of Liability</h3>
        <p>AdStudio is provided on an "as is" basis. We are not liable for indirect or consequential damages, business losses, or loss of data resulting from use of the platform.</p>
        <h3 className="text-white font-semibold text-xl">Termination</h3>
        <p>We may suspend or terminate accounts that violate these Terms or misuse the service.</p>
        <h3 className="text-white font-semibold text-xl">Changes</h3>
        <p>These policies may be updated periodically. Continued use of AdStudio constitutes acceptance of the updated policies.</p>
      </Card>

      <section className="bg-cyan-500/10 border border-cyan-400/30 rounded-2xl p-8 text-center">
        <Mail className="mx-auto text-cyan-400 mb-4"/>
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className="mt-4 text-gray-300">Questions about these policies can be sent to:</p>
        <p className="mt-4 text-cyan-300">support@adstudioo.com</p>
        <p className="text-cyan-300">https://adstudioo.com</p>
      </section>
    </main>
    <Footer/>
  </div>);
}
