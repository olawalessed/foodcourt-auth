import { AtSymbolIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import HeadingBox from "../re-usable/HeadingBox";

export default function MainForm() {
  return (
    <>
      <div className="">
        <div className="">
          <HeadingBox
            heading="Join the flavor parade!"
            subHeading="Register to start ordering mouthwatering meals"
          />
          <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 placeholder:text-gray-300 p-4 pe-12 text-xl shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <AtSymbolIcon className="w-5 h-5 text-black" />
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 placeholder:text-gray-300 p-4 pe-12 text-xl shadow-sm"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <EyeIcon className="w-5 h-5 text-black" />
                  {/* <EyeSlashIcon className="w-5 h-5 text-black" /> */}
                </span>
              </div>
            </div>

            <div className="h-10 flex items-center justify-between pt-2.5 pb-10">
              <p className="text-gray-400">
                Your password is <span className="font-bold">Strong</span>
              </p>

              <div className="flex gap-1">
                <span className="w-20 h-2 rounded-md bg-rose-500"></span>
                <span className="w-20 h-2 rounded-md bg-orange-500"></span>
                <span className="w-20 h-2 rounded-md bg-teal-500"></span>
              </div>
            </div>
            <button
              type="button"
              className="block w-full rounded-lg outline-none focus:outline-none bg-rose-600 px-5 py-3 text-lg font-medium text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
