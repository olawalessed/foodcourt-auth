import { useEffect, useState } from "react";
import { useCheckBoxStore } from "../store/checkBoxStore";
import { passwordConditions } from "../utils/validInputChecker";

const useInputValidator = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setError] = useState("");

  const { checkboxes } = useCheckBoxStore();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    let errorMessage = "";

    // const conditions = Object.entries(passwordConditions).map((e) => e);
    const userCheckboxOptions = Object.entries(checkboxes)
      .filter((option) => option[1] === true)
      .map((option) => option[0]);

    for (const option of userCheckboxOptions) {
      switch (option) {
        case "uppercase":
          if (!password.match(passwordConditions.uppercase)) {
            errorMessage =
              "Password must contain at least one uppercase letter (A-Z)";
          }
          break;
        case "lowercase":
          if (!password.match(passwordConditions.lowercase)) {
            errorMessage =
              "Password must contain at least one lowercase letter (a-z)";
          }
          break;
        case "figure":
          if (!password.match(passwordConditions.figure)) {
            errorMessage = "Password must contain at least one digit (0-9)";
          }
          break;
        case "specialCharacter":
          if (!password.match(passwordConditions.specialCharacter)) {
            errorMessage =
              "Password must contain at least one special character (!@#$%^&*())";
          }
          break;
        case "minLength":
          if (!password.match(passwordConditions.minLength)) {
            errorMessage = "Password must be at least 8 characters long";
          }
          break;
        default:
          break;
      }

      if (errorMessage) {
        break;
      }
    }
    setError(errorMessage);

  }, [password]);

  return {
    email,
    password,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
  };
};

export default useInputValidator;
