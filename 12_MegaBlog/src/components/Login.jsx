import { Link } from "react-router-dom";
import {Button, Input } from "../components/common";

export default function LoginPage() {
  return (
    <div className="h-[calc(100vh-188px)] flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Left Image */}
        <div className="hidden md:block">
          <img
            src="https://images.pexels.com/photos/33592809/pexels-photo-33592809.jpeg?_gl=1*1val93l*_ga*Mzk5NTIxNzc2LjE3NTQ1MzE0MTc.*_ga_8JE65Q40S6*czE3NTYzNzM1NDkkbzUkZzEkdDE3NTYzNzM1NjEkajQ4JGwwJGgw"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back!</h2>
          <p className="text-gray-500 mb-8">Login to your account to continue</p>

          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter your email"                
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter your password"                
              />
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              
            >
              Login
            </Button>
          </form>

          <p className="mt-6 text-gray-500 text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
