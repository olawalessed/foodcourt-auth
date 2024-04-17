import { AtSymbolIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import HeadingBox from "../re-usable/HeadingBox";
import { useCheckBoxStore } from "../../store/checkBoxStore";
import usePasswordValidator from "../../hooks/usePasswordValidator";
import useCheckSettings from "../../hooks/useCheckSettings";
import { isInputValid } from "../../utils/validInputChecker";
import { Alert, AlertIcon } from "@chakra-ui/react";

export default function MainForm() {
  const checkboxes = useCheckBoxStore((c) => c.checkboxes);

  // const inputDisableChecker = Object.values(checkboxes).every(
  //   (e) => e === false
  // ); // TODO: change to hook

  const {
    email,
    password,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
  } = usePasswordValidator();
  const { passwordStrength, disableFormInput } = useCheckSettings();

  const inputIsValid = isInputValid(email) && isInputValid(password);

  console.log(passwordStrength);

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
                  name="email"
                  value={email}
                  className="w-full rounded-lg border-gray-200 placeholder:text-gray-300 p-4 pe-12 text-xl shadow-sm disabled:bg-gray-100"
                  placeholder="Enter email"
                  disabled={disableFormInput}
                  onChange={handleEmailChange}
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
                  name="password"
                  value={password}
                  className="w-full rounded-lg border-gray-200 placeholder:text-gray-300 p-4 pe-12 text-xl shadow-sm disabled:bg-gray-100"
                  placeholder="Enter password"
                  disabled={disableFormInput}
                  onChange={handlePasswordChange}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <EyeIcon className="w-5 h-5 text-black" />
                  {/* <EyeSlashIcon className="w-5 h-5 text-black" /> */}
                </span>
              </div>
            </div>

            {/* Password strength indicator // TODO: Convert to component */}
            <div
              className={`h-10 flex items-center justify-between pt-2.5 pb-10 ${
                disableFormInput || !password.length ? "opacity-0" : "flex"
              }`}
            >
              <p className="text-gray-400">
                Your password is <span className="font-bold">Strong</span>
              </p>

              <div className="flex gap-1">
                <span className="w-20 h-2 rounded-md bg-rose-500"></span>
                <span className="w-20 h-2 rounded-md bg-orange-400"></span>
                <span className="w-20 h-2 rounded-md bg-emerald-500"></span>
              </div>
            </div>

            <Alert
              borderRadius={10}
              hidden={!inputIsValid || !passwordError.length}
              status="warning"
            >
              <AlertIcon />
              {passwordError}
            </Alert>

            <button
              type="button"
              disabled={disableFormInput || !inputIsValid}
              className="block w-full rounded-lg outline-none focus:outline-none bg-rose-600 px-5 py-3 text-lg font-medium text-white disabled:bg-gray-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
