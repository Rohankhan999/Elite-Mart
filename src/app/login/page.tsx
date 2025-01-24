"use client"
export default function Login() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[200px] md:h-[286px] bg-[#F6F5FF] flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">My Account</h1>
          <p className="text-sm text-gray-500">
            Home &gt; Pages &gt;{" "}
            <span className="text-pink-500">My Account</span>
          </p>
        </div>
      </div>

      {/* Login Section */}
      <div className="flex justify-center items-center mt-10 px-4">
        <div className="w-full max-w-md bg-white p-6 md:p-8 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Login</h2>
          <p className="text-gray-500 text-center mb-6">
            Please login using account details below.
          </p>
          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="text-right mb-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-pink-500 transition"
              >
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-600 transition"
            >
              Sign In
            </button>
            <p className="text-center text-gray-500 mt-6">
              Don&apos;t have an Account?{" "}
              <a
                href="#"
                className="text-pink-500 font-semibold hover:underline"
              >
                Create account
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Logos Section */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center px-4 mb-8">
        <img
          src="/logz5.jpeg"
          alt="Logo 1"
          className="w-20 h-20 md:w-32 md:h-32 object-contain"
        />
        <img
          src="/logz1.jpeg"
          alt="Logo 2"
          className="w-20 h-20 md:w-32 md:h-32 object-contain"
        />
        <img
          src="/logz2.jpeg"
          alt="Logo 3"
          className="w-20 h-20 md:w-32 md:h-32 object-contain"
        />
        <img
          src="/logz4.jpeg"
          alt="Logo 4"
          className="w-20 h-20 md:w-32 md:h-32 object-contain"
        />
        <img
          src="/logz3.jpeg"
          alt="Logo 5"
          className="w-20 h-20 md:w-32 md:h-32 object-contain"
        />
      </div>
    </div>
  );
}
