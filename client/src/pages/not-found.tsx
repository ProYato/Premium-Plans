import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "react-router-dom"; // or your routing library

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-pink-50 bg-[radial-gradient(#ffcce6_1px,transparent_1px)] bg-[size:20px_20px]">
      <Card className="w-full max-w-md mx-4 border-pink-200 shadow-lg overflow-hidden">
        <CardContent className="p-0">
          {/* Anime Image */}
          <div className="relative h-40 w-full bg-gradient-to-r from-pink-300 to-purple-300 flex justify-center">
            <img
              src="https://i.postimg.cc/brsbNsrY/Kawaii-Anime-Girl-PNG-Images-HD.png"
              alt="Anime Girl"
              width={160}
              height={160}
              className="absolute -top-10 animate-float"
              style={{ animation: 'float 4s ease-in-out infinite' }}
            />
          </div>

          {/* Content */}
          <div className="p-6 pt-16 text-center">
            <div className="flex justify-center mb-2 gap-2">
              <AlertCircle className="h-6 w-6 text-pink-500" />
              <h1 className="text-3xl font-bold text-pink-600">UwU 404</h1>
            </div>

            <p className="mt-2 text-lg text-pink-800 font-medium">
              What are you lookin' for, senpai?
            </p>
            <p className="mt-2 text-sm text-pink-600">
              The page you're searching for has vanished into the anime void~
            </p>

            <Link 
              to="/" 
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              <Home className="h-4 w-4" />
              Take me home!
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Add floating animation to your CSS file or use this style tag */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .dark .bg-pink-50 {
          background-color: #1a1a2e;
          background-image: radial-gradient(#4a235a 1px, transparent 1px);
        }
        .dark .text-pink-800 {
          color: #e6e6e6;
        }
        .dark .text-pink-600 {
          color: #d1d1d1;
        }
        .dark .border-pink-200 {
          border-color: #4a235a;
        }
      `}</style>
    </div>
  );
}
