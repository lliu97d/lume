import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <div className="relative mb-8 h-[60vh] w-full max-w-4xl overflow-hidden">
        <Image
          src="/DSCF2877.JPG"
          alt="Hero image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <h1 className="text-4xl font-semibold tracking-tight">Lume</h1>
      <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
        Capturing light and moments
      </p>
    </div>
  );
}
