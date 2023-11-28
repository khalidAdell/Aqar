import Searchbar from "./SearchForm";
import NavLinks from "./NavLinks";

const Landing = () => {
  return (
    <div className="bg-landing lg:bg-[length:100%_100%] bg-cover p-6 h-fit md:h-[80vh] relative md:rounded-b-[4rem]">
      <div className="flex flex-col gap-3 justify-center h-full md:w-2/3 mx-auto">
        <h1 className="[text-shadow:_1px_1px_1px_rgba(0,0,0,0.51)] drop-shadow-sm text-white text-3xl font-semibold">
          Properties to buy
        </h1>
        <div className="mt-2">
          <NavLinks />
          <Searchbar />
        </div>
      </div>
    </div>
  );
};

export default Landing;
