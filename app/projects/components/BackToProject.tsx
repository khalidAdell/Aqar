"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BackToProject = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/projects" && (
        <Link
          href={`/projects`}
          className="border text-primary p-2 rounded-2xl"
        >
          DLF The Aralias - Projects
        </Link>
      )}
    </>
  );
};

export default BackToProject;
