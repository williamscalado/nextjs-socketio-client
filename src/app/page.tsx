import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex h-[400px] w-full justify-center items-center space-x-5">
        <Link
          href={"/student"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Área do aluno
        </Link>
        <Link
          href={"/admin"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Área do professor
        </Link>
      </div>
    </>
  );
}
