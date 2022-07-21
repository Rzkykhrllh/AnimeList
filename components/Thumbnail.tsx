import Image from "next/image";
import React from "react";
import { TMovie } from "types/movie.type";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "atoms/modalAtom";

type Props = {
  movie: TMovie;
};

function Thumbnail(props: Props) {
  const { movie } = props;

  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
      className="cursor-pointer relative min-w-[180px] h-28 transition duration-200 md:h-36 md:min-w-[260px] md:hover:scale-105 ease-out"
    >
      <Image
        className="object-cover rounded-sm md:rounded"
        layout="fill"
        alt="thumbanil"
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
      />
    </div>
  );
}

export default Thumbnail;
