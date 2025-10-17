import { Link } from "react-router";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 py-24">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">Create Account</h1>
          <p className="text-gray-600 font-sans">
            Join our exclusive community
          </p>
        </div>

        <div className="bg-white p-10 shadow-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm tracking-wide mb-2 text-gray-700">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-sans"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block text-sm tracking-wide mb-2 text-gray-700">
                  LAST NAME
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-sans"
                  placeholder="Doe"
                />
              </div>
            </div>

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
                placeholder="Minimum 8 characters"
              />
            </div>

            <div>
              <label className="block text-sm tracking-wide mb-2 text-gray-700">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-sans"
                placeholder="Re-enter password"
              />
            </div>

            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-2" />
              <label className="text-sm text-gray-600 font-sans">
                I agree to the{" "}
                <a href="#" className="text-black hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-black hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 tracking-widest text-sm hover:bg-gray-800 transition-colors"
            >
              CREATE ACCOUNT
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 font-sans text-sm">
              Already have an account?{" "}
              <Link to="/login">
                <button className="text-black hover:underline font-medium">
                  Sign in
                </button>
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/">
            <button className="text-gray-600 hover:text-black transition-colors text-sm font-sans">
              ← Back to shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
