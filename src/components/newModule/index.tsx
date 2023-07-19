import { useRef } from "react";

interface Props {
  setValue: (valeu: string) => void;
  handleSubmit: () => void;
}
export default function NewModule({ setValue, handleSubmit }: Props) {
  const refInput = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    handleSubmit();
    refInput.current!.value = "";
  };
  return (
    <>
      <div className=" w-[500px] bg-slate-800 rounded-xl p-4 m-auto mt-5  ">
        <h1 className="text-gray-100 font-bold">Cadastro de módulo</h1>
        <div className="flex flex-col space-y-2 mt-3">
          <label className="">Nome do módulo</label>
          <input
            type="text"
            className="h-[44px] rounded-md text-black p-3"
            onChange={(e) => setValue(e.target.value)}
            ref={refInput}
          />
          <button
            type="button"
            onClick={handleClick}
            className="bg-blue-700  p-2 w-max items-center self-end rounded hover:bg-blue-600"
          >
            Enviar dados
          </button>
        </div>
      </div>
    </>
  );
}
