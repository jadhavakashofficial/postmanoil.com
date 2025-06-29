import Layout from "@/components/Layout";
import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <Layout>
      <Head>
        <title>Terms & Conditions | Postman Oils</title>
        <meta name="description" content="Read the terms and conditions for using the Postman Oils website, operated by Mittal Oil Mills (Pvt.) Ltd." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.postmanoil.com/terms" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-4xl font-bold text-yellow-700 mb-6">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: May 9, 2025</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the Postman Oils website, including all pages, features, and services. By using this site, you accept all terms outlined here, along with our Privacy Policy.
              We reserve the right to update these terms at any time. Continued use of the site means you accept those changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">2. Website Use</h2>
            <ul className="list-disc ml-6">
              <li>This website is intended for informational purposes only.</li>
              <li>You agree not to use this website for any unlawful purpose.</li>
              <li>You must not use this website to distribute viruses, spam, or malicious content.</li>
              <li>You agree not to copy, reuse, or republish any content without prior written consent.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">3. Dealer/Distributor Enquiries</h2>
            <ul className="list-disc ml-6">
              <li>Submitting an enquiry does not guarantee dealership.</li>
              <li>We may contact you for further verification or discussions.</li>
              <li>All details provided must be accurate and truthful.</li>
              <li>We reserve the right to reject any enquiry without obligation to explain.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">4. Product Information</h2>
            <ul className="list-disc ml-6">
              <li>Product images are for representation only.</li>
              <li>Specifications, packaging, and sizes may vary slightly.</li>
              <li>We do not guarantee stock availability at all times.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">5. Pricing & Payments</h2>
            <ul className="list-disc ml-6">
              <li>Prices, if shown, are subject to change without notice.</li>
              <li>Final prices for dealership, distribution, or delivery will be shared via direct contact and confirmation.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">6. Intellectual Property</h2>
            <p>
              All content — including logos, names, slogans, and visuals — is protected by copyright and trademark laws. Unauthorized use is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">7. Limitation of Liability</h2>
            <ul className="list-disc ml-6">
              <li>We are not liable for any loss from use or inability to use the website.</li>
              <li>We do not guarantee accuracy of descriptions or availability.</li>
              <li>We are not responsible for technical delays or issues.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">8. External Links</h2>
            <p>
              Links to third-party platforms like Instagram, Facebook, and LinkedIn are for convenience. We are not responsible for their content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">9. User Submissions</h2>
            <ul className="list-disc ml-6">
              <li>Information provided must be true and lawful.</li>
              <li>We may contact you for follow-up or marketing.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">10. Termination of Access</h2>
            <p>Access may be blocked in case of abusive behavior, fraud, or breach of terms.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">11. Governing Law</h2>
            <p>These terms are governed by Indian law under the jurisdiction of Ajmer District Court (Rajasthan).</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">12. Disclaimer</h2>
            <p>We strive for accuracy but do not guarantee it. Content may be outdated or incorrect.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">13. Contact Information</h2>
            <p>
              Mittal Oil Mills (Pvt.) Ltd.<br />
              📍 H-1, 87 to 94, RIICO Industrial Area, Jaipur Road, Kekri – 305404, Ajmer, Rajasthan<br />
              📞 +91 99280 21482, +91 92140 44288, +91 95290 80832<br />
              📧 marketingpostmanoil@gmail.com
            </p>
            <p className="mt-2 font-bold">✅ Postman Oils – Taste of Tradition, Trust of Generations</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
