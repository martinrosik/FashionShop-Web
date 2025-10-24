import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-6 py-24">
      <div className="bg-white rounded-2xl p-8 md:p-12 max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="email"
                type="email"
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="password"
                type="password"
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-gray-900 font-semibold hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="w-full bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 transition-all font-semibold"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-8 text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-gray-900 font-semibold hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
