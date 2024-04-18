import { useEffect, useState } from "react";
import { useCheckBoxStore } from "../store/checkBoxStore";
import { useModalStore } from "../store/modalStore";

export type PasswordStrength = "Easy" | "Medium" | "Hard";

const useCheckSettings = () => {
  const [disableFormInput, setDisableFormInput] = useState(false);

  const checkboxes = useCheckBoxStore((v) => v.checkboxes);
  const openModal = useModalStore((e) => e.openModal);

  useEffect(() => {
    const hasSettings = Object.values(checkboxes).some((value) => value);

    if (!hasSettings) {
      setDisableFormInput(true);
      openModal();
    } else {
      setDisableFormInput(false);
    }
  }, [checkboxes]);

  return { disableFormInput };
};

export default useCheckSettings;
