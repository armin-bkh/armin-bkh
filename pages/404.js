import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center main p-5 min-h-[86.2vh]">
      <p className="text-sm md:text-xl">404 | page could not be find</p>
      <h1 className="text-6xl text-emerald-500 mb-5 md:text-8xl">Oooops!</h1>
      <p className="text-lg md:text-2xl">Looks like you lost your way</p>
      <p className="text-lg md:text-2xl">return home</p>
      <Link href="/">
        <a
          className="mt-5 cursor-pointer bg-emerald-500 text-sm md:text-base text-gray-700
          py-2 px-10 rounded-md transition shadow-lg shadow-emerald-500/40"
        >
          Home page
        </a>
      </Link>
    </section>
  );
};

export default NotFound;
