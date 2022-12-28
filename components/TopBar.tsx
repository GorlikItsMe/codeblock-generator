import Select from "./Select";
import Toggle from "./Toggle";

function TopBar({
  select,
  toggle,
  language,
  saveImage,
}: {
  toggle: {
    checked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
  language: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    options: React.ReactNode[];
  };
  select: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    options: React.ReactNode[];
  };
  saveImage: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="list-reset flex flex-wrap items-center justify-between my-2">
      <Toggle {...toggle} />
      <Select {...language} />
      <Select {...select} />
      <button onClick={saveImage}>SaveImage</button>
    </div>
  );
}

export default TopBar;
