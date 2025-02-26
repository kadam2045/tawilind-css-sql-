import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image width={50} height={50} src="/logo.svg" alt="logo" />
      <p className="p-4">youtube</p>
    </div>
  );
}
