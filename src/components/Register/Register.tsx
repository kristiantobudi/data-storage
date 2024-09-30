"use client";

import { RegisterSchemaType } from "@/schema/registerSchema";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormHelper } from "@/hooks";
import { Controller } from "react-hook-form";
import { useRegister } from "./useRegister";
import { useToggle } from "@/hooks/useToggle";

export default function Register() {
  const { bindInput } = useFormHelper<RegisterSchemaType>();
  const { showPassword, toggleShowPassword } = useToggle();
  const { registerControl, onSubmit } = useRegister();

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div className="rounded-lg shadow-2xl overflow-hidden max-w-7xl w-full bg-white">
        <h1 className="text-3xl font-bold text-gray-900 text-start px-6 py-2 mt-3">
          Register
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 ">
          <div className="items-center justify-items-center">
            <form className="p-6 rounded-none" onSubmit={onSubmit}>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Username
                </label>
                <Controller
                  control={registerControl}
                  name="username"
                  render={({ field, fieldState }) => (
                    <div>
                      <input
                        id="username"
                        {...bindInput(field, fieldState)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-400 block w-full p-2.5"
                        placeholder="username"
                        required
                      />
                      {fieldState.error && (
                        <p className="text-red-500 text-xs mt-1">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <Controller
                  control={registerControl}
                  name="email"
                  render={({ field, fieldState }) => (
                    <div>
                      <input
                        id="email"
                        {...bindInput(field, fieldState)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-400 block w-full p-2.5"
                        placeholder="email"
                        required
                      />
                      {fieldState.error && (
                        <p className="text-red-500 text-xs mt-1">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="mb-5 relative">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <Controller
                  control={registerControl}
                  name="password"
                  render={({ field, fieldState }) => (
                    <div>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        {...bindInput(field, fieldState)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-400 block w-full p-2.5"
                        placeholder="password"
                        required
                      />
                      {fieldState.error?.message && (
                        <p className="text-red-400 text-sm mt-2">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                <div
                  onClick={toggleShowPassword}
                  className="absolute inset-y-0 top-1/3 right-3 flex items-center cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <div className="mb-5 relative">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Confirm Password
                </label>
                <Controller
                  control={registerControl}
                  name="confirmPassword"
                  render={({ field, fieldState }) => (
                    <div>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="confirmPassword"
                        {...bindInput(field, fieldState)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-400 block w-full p-2.5"
                        placeholder="confirm password"
                        required
                      />
                      {fieldState.error?.message && (
                        <p className="text-red-400 text-sm mt-2">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                <div
                  onClick={toggleShowPassword}
                  className="absolute inset-y-0 top-1/3 right-3 flex items-center cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-3 focus:ring-blue-300"
                  />
                </div>
                <label className="ms-2 text-sm font-medium text-gray-900">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="ms-2 text-sm sm:text-sm lg:text-lg font-bold text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-full px-5 py-2 text-center"
              >
                <Link href="/auth/login">Register</Link>
              </button>
            </form>
          </div>
          <div className="ml-4">
            <div className="flex items-center justify-center">
              <Image
                src="/images/register.jpg"
                className="p-2 rounded-lg"
                alt="Register image"
                width={400}
                height={700}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
