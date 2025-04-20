import { FaFileContract, FaExclamationTriangle, FaHandshake } from "react-icons/fa";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function TermsOfService() {
  return (
    <div className="min-h-screen dark:bg-[#0a0a0a] bg-gray-50">
      <Navbar />
      
      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-[#161616] shadow-lg rounded-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-gray-900">
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Effective date: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <FaFileContract className="text-2xl text-[#5f6df8] mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2 dark:text-white">Service Description</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Premium Flix provides access to premium Telegram channels through subscription plans. We are not affiliated with Telegram Inc.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <FaExclamationTriangle className="text-2xl text-[#5f6df8] mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2 dark:text-white">User Responsibilities</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    You agree not to share your access with others. Violations may result in termination of your subscription without refund.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <FaHandshake className="text-2xl text-[#5f6df8] mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2 dark:text-white">Refund Policy</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    All sales are final. Refunds are only issued in exceptional circumstances at our discretion.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h3 className="font-medium text-yellow-700 dark:text-yellow-300 mb-2">Important Notice</h3>
              <p className="text-sm text-yellow-600 dark:text-yellow-400">
                By using our services, you agree to these terms. We reserve the right to update these terms at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
