import React, { useEffect, useState } from "react";
import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { modalState, animeState } from "atoms/modalAtom";
import {
  PlusIcon,
  ThumbUpIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  XIcon,
} from "@heroicons/react/outline";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";

type Props = {};

const Modal = ({}: Props) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(animeState);
  const [muted, setMuted] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button onClick={() => setShowModal(false)}>
          <XIcon className="modalButton absolute top-5 right-5 border-none h-9 w-9 !z-40 bg-[#181818] hover:bg-[#181818]" />
        </button>

        {/* Media Player */}
        <div className="relative pt-[56.25%]">
          {!!movie?.trailer?.id && (
            <ReactPlayer
              url={`https://youtube.com/watch?v=${
                movie?.trailer?.id
              }`}
              height="100%"
              width="100%"
              style={{ position: "absolute", top: "0", left: "0", right: "0" }}
              playing
              muted={muted}
            />
          )}

          <div className="absolute flex items-center justify-between w-full px-10 bottom-10">
            <div className="flex space-x-2 ">
              <button className="flex items-center font-bold bg-white rounded gap-x-2 px-8 text-xl text-black  transition hover:bg-[#e6e6e6]">
                <FaPlay className=" h-7 w-7" />
                Play
              </button>

              <button className="modalButton">
                <PlusIcon className="h-7 w-7" />
              </button>
              <button className="modalButton">
                <ThumbUpIcon className="h-7 w-7" />
              </button>
            </div>
            <button className="modalButton" onClick={() => setMuted(!muted)}>
              {muted ? (
                <VolumeOffIcon className="w-6 h-6" />
              ) : (
                <VolumeUpIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Information */}
        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {movie?.meanScore}Match
              </p>
              <p className="font-light">
                {`${movie?.startDate.day}/${movie?.startDate.month}/${movie?.startDate.year}`}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
            <div className="flex flex-col font-light gap-x-10 gap-y-4 md:flex-row">
              <p
                className="w-5/6"
                dangerouslySetInnerHTML={{ __html: movie?.description }}
              >
                {}
              </p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres:</span>{" "}
                  {movie?.genres.map((genre: string) => genre).join(", ")}
                </div>

                <div>
                  <span className="text-[gray]">Season:</span> {movie?.season}
                </div>

                <div>
                  <span className="text-[gray]">Format:</span> {movie?.format}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;
