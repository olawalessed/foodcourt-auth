import { useEffect, useState } from "react";

const usePasswordValidator = () => {
  const [email, setEmail] = useState("chop@getfoodcourt.com");
  const [password, setPassword] = useState("");
  const [passwordError, setError] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const passwordConditions = {
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      figure: /[0-9]/,
      specialCharacter: /[!@#$%^&*()]/,
      minLength: /.{8,}/,
    };

    let errorMessage = "";

    const conditions = Object.entries(passwordConditions).map((e) => e);

    for (const [key, pattern] of conditions) {
      switch (key) {
        case "uppercase":
          if (!password.match(pattern)) {
            errorMessage =
              "Password must contain at least one uppercase letter (A-Z)";
          }
          break;
        case "lowercase":
          if (!password.match(pattern)) {
            errorMessage =
              "Password must contain at least one lowercase letter (a-z)";
          }
          break;
        case "figure":
          if (!password.match(pattern)) {
            errorMessage = "Password must contain at least one digit (0-9)";
          }
          break;
        case "specialCharacter":
          if (!password.match(pattern)) {
            errorMessage =
              "Password must contain at least one special character (!@#$%^&*())";
          }
          break;
        case "minLength":
          if (!password.match(pattern)) {
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

export default usePasswordValidator;
