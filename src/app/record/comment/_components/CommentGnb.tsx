interface CommentGnbProps {
  category: "desc" | "popular";
  setCategory: (category: "desc" | "popular") => void;
}

export const CommentGnb = ({ category, setCategory }: CommentGnbProps) => {
  return (
    <div className="w-[90%] tablet:w-[85%] mx-auto mb-5">
      <ul className="flex gap-[10px] items-center">
        <li className="">
          <button
            onClick={() => setCategory("desc")}
            className={`inline-block px-[15px] py-[5px] bg-[#d9d9d9] text-[#3b3b3b] rounded-[10px] font-bold hover:bg-green200 hover:text-white hover:translate-y-[-2px] duration-300 ${
              category === "desc" && "bg-green200 text-white translate-y-[-2px]"
            }`}
          >
            최신순
          </button>
        </li>
        <li className="">
          <button
            onClick={() => setCategory("popular")}
            className={`inline-block px-[15px] py-[5px] bg-[#d9d9d9] text-[#3b3b3b] rounded-[10px] font-bold hover:bg-green200 hover:text-white hover:translate-y-[-2px] duration-300 ${
              category === "popular" && "bg-green200 text-white translate-y-[-2px]"
            }`}
          >
            인기순
          </button>
        </li>
      </ul>
    </div>
  );
};
