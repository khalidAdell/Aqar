import Link from "next/link";
import BackToProject from "./BackToProject";

const QuickLinks = () => {
  const links = ["Brochure", "Amenities", "Reviews", "Specifications"];

  return (
    <div className="w-full bg-white border py-8 px-6 rounded-2xl">
      <h1 className="text-xl font-bold">DLF The Aralias - Quick Links</h1>
      <div className="divider"></div>
      <div className="flex flex-wrap gap-3">
        <BackToProject />
        {links.map((link, i) => (
          <Link
            href={`/projects/${link.toLowerCase()}`}
            key={i}
            className="border text-primary p-2 rounded-2xl"
          >
            DLF The Aralias - {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
