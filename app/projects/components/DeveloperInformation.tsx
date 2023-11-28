import Image from "next/image";
import Possessionstatus from "./Possessionstatus";

const DeveloperInformation = () => {
  return (
    <div className="w-full bg-white border py-8 px-6 rounded-2xl">
      <h1 className="text-xl font-bold">
        DLF The Aralias Developer Information
      </h1>
      <div className="divider"></div>
      <div className=" border-2 rounded-lg p-4">
        <div className="flex items-center gap-1">
          <Image
            src="/images/logo.jpg"
            width={100}
            height={100}
            alt="logo"
            className="w-20 h-20"
          />
          <div>
            <h2 className="text-lg font-bold">DLF</h2>
            <div className=" flex gap-2">
              <div>
                <p className="text-sm">1946</p>
                <p className="text-sm text-gray-500 my-1">Established In</p>
              </div>
              <div>
                <p className="text-sm">146</p>
                <p className="text-sm text-gray-500 my-1">Total Projects</p>
              </div>
            </div>
          </div>
        </div>
        <p className="font-medium text-gray-500 text-[15px] mt-2 leading-7">
          At DLF, we take pride in our uncompromising integrity in customer
          engagement and quality assurance, and throughout our 73 years legacy
          we have made it our core mission to provide real-estate development,
          management, and investment services of the highest calibre.
        </p>
      </div>
      <Possessionstatus />
    </div>
  );
};

export default DeveloperInformation;
