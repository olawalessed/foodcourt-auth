import { useEffect, useState } from "react";
import { CheckBoxName, useCheckBoxStore } from "../store/checkBoxStore";

const useCheckboxChangeHandler = () => {
    

  const toggleCheckBox = useCheckBoxStore((t) => t.toggleCheckbox);
  const checkboxes = useCheckBoxStore((x) => x.checkboxes);
  const [checkboxState, setCheckboxState] = useState(checkboxes);

  const handleCheckboxChange = (value: CheckBoxName) => {
    toggleCheckBox(value);
    setCheckboxState((prevState) => ({
        ...prevState,
        [value]: !prevState[value],
      }));
  };

  useEffect(() => {
    setCheckboxState(checkboxes);
  }, [checkboxes]);

  return { handleCheckboxChange, checkboxState };
};

export default useCheckboxChangeHandler;
