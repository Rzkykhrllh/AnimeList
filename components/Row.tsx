import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import { TMovie } from "types/movie.type";
import Thumbnail from "@components/Thumbnail";

type Props = {
  movies: TMovie[];
  title: string;
};

function Row(props: Props) {
  const { movies, title } = props;

  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className=" h-44  space-x-0.5 md:space-x-2">
      <h2 className="text-[#e5e5e5] duration-200 hover:text-white font-semibold w-56 cursor-pointer md:text-2xl">
        {title}
      </h2>
      <div className="relative md:-ml-2 group">
        <ChevronLeftIcon
          onClick={() => handleClick("left")}
          className={`absolute top-0 bottom-0 z-40 m-auto transition opacity-0 cursor-pointer absotule left-2 h-9 w-9 hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 md:space-x-2.5 overflow-x-scroll scrollbar-hide"
        >
          {movies.map((movie) => {
            return <Thumbnail movie={movie} key={movie.id} />;
          })}
        </div>
        <ChevronRightIcon
          onClick={() => handleClick("right")}
          className="absolute top-0 bottom-0 z-40 m-auto transition opacity-0 cursor-pointer absotule right-2 h-9 w-9 hover:scale-125 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}

export default Row;
