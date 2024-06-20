import Image from "next/image";
import shy from "@/public/shyduck.jpeg"

export default function Home() {
  return (
    <main className="bg-pink-100 flex relative h-screen flex-col items-center justify-center p-32">
      <h1 className="w-full text-center text-pink-500 font-bold text-3xl">
        Will you go out with me?
      </h1>
      <div>
        <Image className="m-10"
          src={shy}
          width={250}
        />
       
      </div>
      <div>
        <button className="bg-pink-500 rounded-3xl px-12 py-1 text-white m-10">
          Yes
        </button>
        <button className="bg-pink-100 rounded-3xl px-12 py-1 text-pink-500 outline m-10">
          No
        </button>
      </div>
        
    </main>
  );
}
