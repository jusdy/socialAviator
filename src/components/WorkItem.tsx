import Link from "next/link";

interface Props {
  title: string;
  description: string;
  link: string;
  className: string;
}

const WorkItem = ({ title, description, link, className }: Props) => {
  return (
    <div className={`${className} flex flex-col bg-[#1F1F1F] rounded-3xl mx-5 overflow-hidden group duration-150 hover:bg-[#333333]`}>
      <div className="relative md:h-[400px] h-[300px] overflow-hidden">
        <img className="object-cover mx-auto" src="/assets/images/sec1.jpg" alt="" />
      </div>
      <div className="flex flex-col gap-4 p-5">
        <h3 className="md:text-2xl text-xl font-bold text-white">{title}</h3>
        <p className="md:text-lg text-sm text-white">{description}</p>
        <Link
          className="md:text-lg text-base text-txtGold border border-gold w-fit px-3 py-1 rounded-full font-[500] group-hover:text-white group-hover:bg-gold/[.3]"
          target="_blank"
          href={link}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default WorkItem;
