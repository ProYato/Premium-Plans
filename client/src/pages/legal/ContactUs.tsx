import { FaTelegram, FaEnvelope, FaClock } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  return (
    <div className="min-h-screen dark:bg-[#0a0a0a] bg-gray-50">
      <Navbar />
      
      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-[#161616] shadow-lg rounded-xl overflow-hidden">
          <div className="p-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-gray-900">
              Contact Us
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              We're here to help with any questions about our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#0088cc]/10 text-[#0088cc] dark:text-[#5ab5f3] p-2 rounded-full">
                  <FaTelegram className="text-xl" />
                </div>
                <h2 className="text-xl font-semibold dark:text-white">Telegram Support</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For fastest response, contact our support team on Telegram
              </p>
              <Button 
                className="w-full bg-[#0088cc] hover:bg-[#0077b5] text-white"
                onClick={() => window.open("https://t.me/PremiumFlixSupport", '_blank')}
              >
                <SiTelegram className="mr-2" />
                Message @OnlyYuji
              </Button>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#5f6df8]/10 text-[#5f6df8] p-2 rounded-full">
                  <FaEnvelope className="text-xl" />
                </div>
                <h2 className="text-xl font-semibold dark:text-white">Email Us</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For formal inquiries or business partnerships
              </p>
              <Button 
                variant="outline"
                className="w-full border-[#5f6df8] text-[#5f6df8] hover:bg-[#5f6df8]/10"
                onClick={() => window.location.href = 'mailto:support@premiumflix.com'}
              >
                <FaEnvelope className="mr-2" />
                support@premiumflix.example
              </Button>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 border-t dark:border-blue-800">
            <div className="flex items-center gap-3">
              <FaClock className="text-blue-500 dark:text-blue-400" />
              <h3 className="font-medium text-blue-700 dark:text-blue-300">Response Times</h3>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
              Telegram: Typically within 1 hour (24/7) • Email: Within 24 hours
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
