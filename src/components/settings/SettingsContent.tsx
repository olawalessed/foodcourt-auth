import CheckBoxGroup from "./child/CheckBoxGroup";

export default function SettingsContent() {
  return (
    <div className="flex flex-col space-y-5">
      <div className="">
        <h4 className="text-xl md:text-2xl font-book">
          Select password criteria
        </h4>
      </div>

      <div className="">
        <CheckBoxGroup />
      </div>
    </div>
  );
}
