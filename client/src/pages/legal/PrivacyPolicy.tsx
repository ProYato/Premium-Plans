import { FaShieldAlt, FaLock, FaUserShield } from "react-icons/fa";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen dark:bg-[#0a0a0a] bg-gray-50">
      <Navbar />
      
      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-[#161616] shadow-lg rounded-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <FaShieldAlt className="text-2xl text-[#5f6df8] mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2 dark:text-white">Information We Collect</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    We only collect necessary information to provide our services, including your Telegram username and payment details through secure third-party processors.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <FaLock className="text-2xl text-[#5f6df8] mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2 dark:text-white">Data Security</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    We implement industry-standard security measures to protect your information. All payment transactions are encrypted.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <FaUserShield className="text-2xl text-[#5f6df8] mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2 dark:text-white">Third-Party Services</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    We use trusted third-party services like PayPal and Stripe for payments. These services have their own privacy policies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Need Help?</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Contact us at @CodeflixSupport on Telegram for any privacy-related questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
