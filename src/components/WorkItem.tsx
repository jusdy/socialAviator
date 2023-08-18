import Link from "next/link";

interface Props {
  title: string;
  description: string;
  link: string;
}

const WorkItem = ({ title, description, link }: Props) => {
  return (
    <div className="flex flex-col bg-[#1F1F1F] rounded-3xl mx-5 overflow-hidden group duration-150 hover:bg-[#333333]">
      <div className="relative h-[400px] overflow-hidden">
        <img className="object-cover" src="/assets/images/sec1.jpg" alt="" />
      </div>
      <div className="flex flex-col gap-4 p-5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
        <Link
          className="text-lg text-txtGold border border-gold w-fit px-3 py-1 rounded-full font-[500] group-hover:text-white group-hover:bg-gold/[.3]"
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
