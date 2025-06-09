import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    // Simulasi registrasi sukses
    navigate("/login");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-xl font-semibold mb-2">Create a new account</h2>

        <form onSubmit={handleRegister}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email address:</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Username:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="yourusername"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password:</label>
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

          {/* Checkbox */}
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="mr-2" required />
              I accept terms and conditions
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            Sign Up
          </button>

          {/* Redirect ke login */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}