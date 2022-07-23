import Image from "next/image";
import React from "react";
import { TAnime } from "types/movie.type";
import { useRecoilState } from "recoil";
import { modalState, animeState } from "atoms/modalAtom";

type Props = {
  movie: TAnime;
};

function Thumbnail(props: Props) {
  const { movie } = props;

  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(animeState);

  // console.log("movie", movie);

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
        src={movie.bannerImage || movie.coverImage.large}
      />
    </div>
  );
}

export default Thumbnail;
