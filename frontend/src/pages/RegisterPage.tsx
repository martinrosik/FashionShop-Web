import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";

export default function RegisterPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-600 to-pink-700 flex items-center justify-center px-6 py-24">
      <div className="bg-white rounded-2xl p-8 md:p-12 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Create Account</h1>
          <p className="text-gray-600">Join the LUXE community</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <label className="flex items-start gap-2 cursor-pointer text-sm">
            <input type="checkbox" className="mt-1 rounded" />
            <span className="text-gray-600">
              I agree to the Terms & Conditions and Privacy Policy
            </span>
          </label>

          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="w-full bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 transition-all font-semibold"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-8 text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-gray-900 font-semibold hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
