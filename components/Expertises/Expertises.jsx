import Image from "next/image";

const expertises = [
  { id: 1, title: "JavaScript", img: "/svg/javascript.svg" },
  { id: 2, title: "React", img: "/svg/react.svg" },
  { id: 3, title: "NextJs", img: "/svg/next-js.svg" },
];

const Expertises = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
      {expertises.map((item) => (
        <div
          className="bg-gray-700 p-5 rounded-md hover:shadow-xl transition flex
          flex-col justify-7 items-center shadow-md"
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
