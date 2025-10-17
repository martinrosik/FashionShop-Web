import { Link } from "react-router";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 py-24">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">Welcome Back</h1>
          <p className="text-gray-600 font-sans">Sign in to your account</p>
        </div>

        <div className="bg-white p-10 shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm tracking-wide mb-2 text-gray-700">
                EMAIL
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-sans"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm tracking-wide mb-2 text-gray-700">
                PASSWORD
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-sans"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between text-sm font-sans">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 tracking-widest text-sm hover:bg-gray-800 transition-colors"
            >
              SIGN IN
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 font-sans text-sm">
              Don't have an account?{" "}
              <Link to="/register">
                <button
                  className="text-black hover:underline font-medium"
                >
                  Create one
                </button>
              </Link>
            </p>
          </div>

          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-sans">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="py-3 border border-gray-300 hover:border-black transition-colors font-sans text-sm">
              Google
            </button>
            <button className="py-3 border border-gray-300 hover:border-black transition-colors font-sans text-sm">
              Facebook
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/">
            <button
              className="text-gray-600 hover:text-black transition-colors text-sm font-sans"
            >
              ← Back to shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
