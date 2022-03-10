import Image from "next/image";

const expertises = [
  { id: 1, title: "JavaScript", img: "/svg/javascript.svg" },
  { id: 2, title: "React", img: "/svg/react.svg" },
  { id: 3, title: "NextJs", img: "/svg/next-js.svg" },
];

const Expertises = () => {
  return (
    <section className="flex flex-wrap justify-center gap-5 mb-5">
      {expertises.map((item) => (
        <div
          className="bg-gray-700 p-5 w-full md:w-4/12 lg:w-3/12 rounded-md hover:shadow-xl transition flex
          flex-col justify-center items-center shadow-md"
          key={item.id}
        >
          <Image
            draggable={false}
            className="drop-shadow-md"
            src={item.img}
            alt={item.title}
            width={150}
            height={150}
          />
          <h5 className="mt-10 text-gray-300 text-3xl">{item.title}</h5>
        </div>
      ))}
    </section>
  );
};

export default Expertises;
