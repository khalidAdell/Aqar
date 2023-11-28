import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
type Props = {
  elements: number[];
  setElements: Dispatch<SetStateAction<number[]>>;
  divRef: MutableRefObject<HTMLDivElement | null>;
};
const Pagination = ({ elements, setElements, divRef }: Props) => {
  //   pagination
  let [currentPage, setCurrentPage] = useState(1);
  let elementsPerPage = 5;
  let lastndex = elementsPerPage * currentPage;
  let firstIndex = lastndex - elementsPerPage;
  let pagesNum = [
    ...Array(Math.ceil(elements.length / elementsPerPage) + 1).keys(),
  ].slice(1);

  const handleClick = (num: number) => {
    setCurrentPage(num);
    window.scrollTo({ top: divRef.current?.offsetTop });
  };

  useEffect(() => {
    setElements(() => elements.slice(firstIndex, lastndex));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div className="flex gap-2">
      {pagesNum.map((num, i) => (
        <span
          key={i}
          onClick={() => handleClick(num)}
          className={`py-1 px-3 rounded-lg cursor-pointer transition ${
            num === currentPage ? "bg-primary text-white" : "bg-white border"
          }`}
        >
          {num}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
