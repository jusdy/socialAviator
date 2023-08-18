import { useEffect, useRef, useState } from "react";

interface Props {
  video: string;
  text: string;
  setExpandedVideoText: (text: string | null) => void;
}

const ExpandingVideo = ({ video, text, setExpandedVideoText }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setExpanded(true);
    setExpandedVideoText(text);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
    setExpandedVideoText(null);
  };

  useEffect(() => {
    if (expanded && videoRef.current) {
      videoRef.current.play();
    } else if (!expanded && videoRef.current) {
      videoRef.current.pause();
    }
  }, [expanded]);

  return (
    <div
      className="relative flex justify-center items-center h-[300px] overflow-hidden duration-500 ease-in-out cursor-pointer rounded-3xl"
      style={{
        width: expanded ? "200px" : "100px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          filter: expanded ? "grayscale(0%)" : "grayscale(100%)",
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default ExpandingVideo;
