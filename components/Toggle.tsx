import React from "react";

function Toggle({
  onChange,
}: {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}) {
  return (
    <div className="inline-block relative w-64 mb-2">
      <label className="block font-bold">
        <input
          className="mr-2 leading-tight"
          type="checkbox"
          onChange={onChange}
        />
        <span className="text-sm">Show Line Numbers</span>
      </label>
    </div>
  );
}
export default Toggle;
