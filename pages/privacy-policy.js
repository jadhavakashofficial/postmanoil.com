// pages/privacy-policy.js
import Layout from "@/components/Layout";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy | Postman Oils - Premium Lubricant Solutions</title>
        <meta
          name="description"
          content="Read Postman Oils' comprehensive privacy policy. Learn how we collect, use, and protect your personal information."
        />
        <meta
          property="og:title"
          content="Privacy Policy | Postman Oils"
        />
        <meta
          property="og:description"
          content="Your data security matters. Explore our privacy practices at Postman Oils."
        />
        <link rel="canonical" href="https://www.postmanoils.com/privacy-policy" />
      </Head>

      {/* Vibrant Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trust is our priority. Learn how we protect your information at Postman Oils.
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-blue-100">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Postman Oils, we collect information to provide better services. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Contact information you provide (name, email, phone number)</li>
              <li>Business details for commercial accounts</li>
              <li>Purchase history and transaction records</li>
              <li>Technical data from website interactions</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">2. How We Use Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-2">Service Delivery</h3>
                <p className="text-gray-700">
                  Process orders, deliver products, and provide customer support
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-bold text-green-800 mb-2">Improvements</h3>
                <p className="text-gray-700">
                  Enhance our products, services, and website experience
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-bold text-purple-800 mb-2">Communication</h3>
                <p className="text-gray-700">
                  Send important updates and respond to inquiries
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h3 className="font-bold text-amber-800 mb-2">Security</h3>
                <p className="text-gray-700">
                  Protect against fraud and unauthorized activities
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">3. Data Protection</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We implement robust security measures including:
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                SSL Encryption
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Regular Audits
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Access Controls
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Secure Storage
              </span>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">4. Your Rights</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              You have the right to:
            </p>
            <div className="border-l-4 border-indigo-500 pl-4 py-2">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Access your personal data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Request correction of inaccurate information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Opt-out of marketing communications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Request deletion of your data under certain conditions</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">5. Policy Updates</h2>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-3">
                This policy was last updated on <span className="font-semibold">June 30, 2025</span>.
              </p>
              <p className="text-gray-700">
                We may periodically update this privacy policy. The current version will always be available on this page.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Questions About Our Privacy Practices?</h3>
          <p className="text-lg text-indigo-600 font-medium">
            Contact us at: privacy@postmanoils.com
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;