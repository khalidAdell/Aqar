import Link from "next/link";

const Questions = () => {
  return (
    <div className="w-full bg-white border py-8 px-6 rounded-2xl">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Questions And Answers</h1>
        <Link
          href="/"
          className="border rounded-lg text-sm px-3 py-1 hover:bg-primary hover:text-white transition"
        >
          Have any questions? Ask here..
        </Link>
      </div>
      <div className="divider mb-0"></div>
      <h4 className="text-sm ">Get answers to your un-answered questions.</h4>

      <div className="mt-2 leading-7">
        <div className="badge bg-primary bg-opacity-10 text-primary text-xs">
          For Proje font-serifct
        </div>
        <h2 className="font-bold">
          Q: Is there a promised date of completion under RERA?
        </h2>
        <p className="text-gray-500 text-[15px]">
          A: Date of completion as provided to RERA is Oct, 2009. RERA?
        </p>
        <div className="divider m-0 after:max-h-[1px] before:max-h-[1px]"></div>
      </div>

      <div className="mt-2 leading-7 font-serif">
        <div className="badge bg-primary bg-opacity-10 text-primary text-xs">
          For Project
        </div>
        <h2 className="font-bold">Q: Is there a servant room?</h2>
        <p className="text-gray-500 text-[15px]">A: Yes</p>
        <div className="divider m-0 after:max-h-[1px] before:max-h-[1px]"></div>
      </div>

      <p className="text-xs text-gray-500">
        Disclaimer: While aqarstock.com takes all steps to ensure accuracy of
        the information provided in this section, please check the same with the
        developers. aqarstock.com does not take responsibility for any
        discrepancies in the information provided.
      </p>
    </div>
  );
};

export default Questions;
