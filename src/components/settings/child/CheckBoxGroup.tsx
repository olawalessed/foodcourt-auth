// import React from "react";
import { checkboxesInfo } from "../../../utils/passwordCriteriaData";
import {
  updateLocalStorage,
  useCheckBoxStore,
} from "../../../store/checkBoxStore";
import { useEffect } from "react";
import useCheckboxChangeHandler from "../../../hooks/useCheckboxHandler";

export default function CheckBoxGroup() {
  const checkboxes = useCheckBoxStore((x) => x.checkboxes);

  const { handleCheckboxChange } = useCheckboxChangeHandler();

  // Handle checkbox storage update
  useEffect(() => {
    return updateLocalStorage(checkboxes);
  }, [checkboxes]);

  return (
    <>
      <div className="space-y-2">
        {checkboxesInfo.map((criteria, i) => (
          <label
            key={i}
            htmlFor={`${i}`}
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-gray-100"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-6 rounded border-gray-300 text-black border-none appearance-auto accent-black"
                id={`${i}`}
                checked={checkboxes[criteria.value]}
                onChange={() => handleCheckboxChange(criteria.value)}
              />
            </div>

            <div>
              <strong className="font-bold text-gray-900">
                {criteria.name}
              </strong>

              <p className="mt-1 text-pretty text-sm text-gray-700">
                {criteria.description}
              </p>
            </div>
          </label>
        ))}
      </div>
    </>
  );
}
