type Props = {
  title: string;
  des: string;
};
const SubTitle = ({ title, des }: Props) => {
  return (
    <div className="">
      <h2 className="md:text-2xl text-xl font-semibold mb-2">{title}</h2>
      <p className="text-md text-gray-500 font-medium">{des}</p>
    </div>
  );
};

export default SubTitle;
