import { FaUser, FaLock } from "react-icons/fa";
import { IoIosKey } from "react-icons/io";
import { TbWheel } from "react-icons/tb";
import { CiUser } from "react-icons/ci";

const Login = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen w-full flex justify-center items-center p-4 sm:p-6">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-[400px] bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl border border-gray-100">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
            Admin Portal
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Access your administration dashboard
          </p>
        </div>

        <div className="mb-3 sm:mb-4 relative">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-200 w-full h-10 sm:h-12 px-4 pl-10 sm:pl-11 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <FaUser className="absolute top-3 sm:top-4 left-3 sm:left-4 text-gray-400" />
        </div>

        <div className="mb-4 sm:mb-6 relative">
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-200 w-full h-10 sm:h-12 px-4 pl-10 sm:pl-11 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <FaLock className="absolute top-3 sm:top-4 left-3 sm:left-4 text-gray-400" />
        </div>

        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-full h-10 sm:h-12 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium text-sm sm:text-base">
          Sign In
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6">
          <button className="bg-blue-700 hover:bg-blue-800 text-white py-1 sm:py-2 rounded-lg text-xs transition-colors">
            Super Admin
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 sm:py-2 rounded-lg text-xs transition-colors">
            Admin
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white py-1 sm:py-2 rounded-lg text-xs transition-colors">
            Teacher
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white py-1 sm:py-2 rounded-lg text-xs transition-colors">
            Accountant
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white py-1 sm:py-2 rounded-lg text-xs transition-colors">
            Receptionist
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white py-1 sm:py-2 rounded-lg text-xs transition-colors">
            Librarian
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-4 sm:mt-6 text-center italic">
          *Note: Select Class 4 and Section A for demo testing.
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
          <a
            href="#"
            className="hover:text-blue-600 flex items-center justify-center sm:justify-start font-medium transition-colors"
          >
            <IoIosKey className="mr-1" />
            Forgot Password?
          </a>
          <div className="flex justify-center sm:justify-end gap-2 sm:gap-4">
            <a
              href="#"
              className="hover:text-blue-600 flex items-center font-medium transition-colors"
            >
              <TbWheel className="mr-1" />
              Front Site
            </a>
            <a
              href="#"
              className="hover:text-blue-600 flex items-center font-medium transition-colors"
            >
              <CiUser className="mr-1" />
              User Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
