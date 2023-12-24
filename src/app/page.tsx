import Image from "next/image";

export default function Home() {
  return (
    <main>
      <p className="p-5 w-full bg-[#F7F7F7] text-center font-[500] tracking-[-0.060rem] underline underline-offset-2">
        Learn about Guest Favorites, the most loved homes on Airbnb
      </p>
      <div className="flex flow-row flex-nowrap justify-between items-center border-b-2 py-4 px-20">
        <Image
          src="/brand_logo.svg"
          alt="Brand Logo"
          width={102}
          height={32}
          priority
        />
        <div className="flex flex-row justify-between items-center divide-x-2 text-sm py-3 px-5 rounded-full shadow-[rgba(0,0,0,0.1)_1px_1px_2px_3px] ">
          <div className="pr-2 font-semibold ">Anywhere</div>
          <div className="px-2 font-semibold ">Any week</div>
          <div className="pl-2 font-[400] ">Add guest</div>
        </div>
        <div className="flex flex-row justify-betwen space-x-5">
          <div className="font-semibold">Airbnb your home</div>
          <div>O</div>
          <div>Login</div>
        </div>
      </div>
    </main>
  );
}
