import React from "react";
import CaretDown from "./CaretDown";

function Select(props: {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: React.ReactNode[];
  value: string;
}) {
  return (
    <div className="inline-block relative w-64 mb-2">
      <select
        onChange={props.onChange}
        value={props.value}
        className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {props.options}
      </select>
      <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
        <CaretDown className="fill-current h-4 w-4" />
      </div>
    </div>
  );
}

export default Select;
