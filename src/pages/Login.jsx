import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    // Simulasi login sukses
    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-xl font-semibold mb-4 text-black"   style={{ fontFamily: '"Nunito Sans", sans-serif' }}>Login to Account</h2>
        <p className="text-sm text-center mb-6 text-gray-600"   style={{ fontFamily: '"Nunito Sans", sans-serif' }}>
          Please enter your email and password to continue
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 ">Email address:</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 "
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••"
              required
            />
            <div className="text-right text-sm mt-1 text-blue-500 cursor-pointer hover:underline">
              Forgot Password?
            </div>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            Sign In
          </button>

          {/* Link ke Register */}
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Create Account
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}