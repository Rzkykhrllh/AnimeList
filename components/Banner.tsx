import React, { useState, useEffect } from "react";
import { TAnime } from "types/movie.type";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { modalState, animeState } from "atoms/modalAtom";

type Props = {
  movies: TAnime[];
};

const Banner = (props: Props) => {
  const { movies } = props;
  const [movie, setMovie] = useState<TAnime | null>(null);

  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(animeState);

  useEffect(() => {
    !!movies && setMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, [movies]);

  return (
    <div className="flex flex-col space-y-2 md:space-y-4 py-16 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 right-0 h-[90vh] -z-10">
        <Image
          src={movie?.bannerImage || movie?.coverImage.large || "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg"}
          alt="banner image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title?.userPreferred || movie?.title?.english || movie?.title?.romaji}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-shadow-md max-h-60">
        {/* {movie?.description} */}
      </p>

      <div className="flex space-x-3">
        <button className="text-black bg-white bannerButton">
          <FaPlay className="w-4 h-4 text-black md:w-7 md:h-7" />
          Play
        </button>
        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          More Info <InformationCircleIcon className="w-5 h-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
