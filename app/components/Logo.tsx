import Image from "next/image";

export default function Logo() {
  return (
    <>
      <div>
        <Image
          className="w-9.75 h-auto"
          src="icons/logo.svg"
          alt="weather app"
          width="39"
          height="21"
        />
      </div>
    </>
  );
}
