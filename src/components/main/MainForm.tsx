import { AtSymbolIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import HeadingBox from "../re-usable/HeadingBox";
import useCheckSettings from "../../hooks/useCheckSettings";
import {
  validInputChecker,
  checkPasswordStrength,
  pwc,
} from "../../utils/validInputChecker";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useInputValidator from "../../hooks/useInputValidator";
import { useCheckBoxStore } from "../../store/checkBoxStore";
import useCheckboxChangeHandler from "../../hooks/useCheckboxHandler";

export default function MainForm() {
  // const inputDisableChecker = Object.values(checkboxes).every(
  //   (e) => e === false
  // ); // TODO: change to hook

  const [showPassword, setShowPassword] = useState(false);
  const [inputIsValid, setInputIsValid] = useState(false);

  const { checkboxes } = useCheckBoxStore();

  const {
    email,
    password,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
  } = useInputValidator();
  const { disableFormInput } = useCheckSettings();
  const { checkboxState } = useCheckboxChangeHandler();

  // const inputIsValid = validInputChecker(password, email);
  const passwordStrength = checkPasswordStrength(password);

  function handleTogglePasswordVisibility(
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ): void {
    event.preventDefault();
    setShowPassword(!showPassword);
  }

  useEffect(() => {
    const isValid = validInputChecker(password, email);
    setInputIsValid(isValid);
  }, [checkboxState, password, email]);

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
                  className="w-full rounded-md border-gray-700 placeholder:text-gray-400 p-3 md:p-4 pe-12 text-xl shadow-sm disabled:bg-gray-100 focus:outline-none outline-none"
                  placeholder="Email"
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
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  className="w-full rounded-md border-gray-700 placeholder:text-gray-400 p-3 md:p-4 pe-12 text-xl shadow-sm disabled:bg-gray-100"
                  placeholder="Enter password"
                  disabled={disableFormInput}
                  onChange={handlePasswordChange}
                />

                <span
                  className="absolute inset-y-0 end-0 grid place-content-center px-4"
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5 text-black" />
                  ) : (
                    <EyeIcon className="w-5 h-5 text-black" />
                  )}
                </span>
              </div>
            </div>

            {/* <div className="w-full flex items-center gap-2 p-2 bg-orange-100 text-rose-900">
              <InfoIcon />
              <p className="text-xs md:text-base">{passwordError}</p>
            </div> */}

            {password.length ? (
              <Alert
                borderRadius={10}
                hidden={!passwordError.length}
                status="warning"
              >
                <AlertIcon />
                <p className="text-xs md:text-base">{passwordError}</p>
              </Alert>
            ) : null}

            {/* // TODO: Convert to component */}
            <div
              className={`h-10 flex items-center justify-between pt-2.5 pb-5 ${
                disableFormInput || !password.length ? "opacity-0" : "flex"
              }`}
            >
              <p className="text-gray-400">
                Your password is{" "}
                <span className="font-bold">{passwordStrength.toString()}</span>
              </p>

              <div className="flex gap-1">
                <span
                  className={`w-10 h-1 rounded-md ${
                    passwordStrength === pwc.medium ||
                    passwordStrength === pwc.hard ||
                    passwordStrength === pwc.easy
                      ? "bg-rose-500"
                      : "bg-rose-100"
                  }`}
                ></span>
                <span
                  className={`w-10 h-1 rounded-md ${
                    passwordStrength === pwc.hard ||
                    (passwordStrength !== pwc.easy &&
                      passwordStrength === pwc.medium)
                      ? "bg-orange-400"
                      : "bg-orange-100"
                  }`}
                ></span>
                <span
                  className={`w-10 h-1 rounded-md ${
                    passwordStrength !== pwc.easy &&
                    passwordStrength !== pwc.medium
                      ? "bg-emerald-500"
                      : "bg-emerald-100"
                  }`}
                ></span>
              </div>
            </div>

            <button
              type="button"
              disabled={passwordError.length !== 0 || !inputIsValid}
              className="block w-full rounded-md outline-none focus:outline-none bg-rose-600 px-5 py-3 md:py-5 text-xl font-medium font-book text-white disabled:bg-gray-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
