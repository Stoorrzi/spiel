import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import "./Game_Easy.css";

export default function ImageComponent({ src }) {
  const [imgLoaded, setImgLoaded] = useState(false);

//   useEffect(() => {
//     const img = new Image();
//     img.onload = () => {
//       setImgLoaded(true);
//     };
//     img.src = src;
//   }, [src]);

  
  return (
    <>
      {/* <div
        style={{
          width: "100%",
          position: "absolute",
          overflowX: "disable",
          display: imgLoaded ? "none" : "inline",
        }}
      >
        <Blurhash
          hash="LGFZivkV5LV[_Lbu9hnP:ttQ9[RR"
          width={width}
          height={height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div> */}

      <img
        className="IMG3"
       loading="lazy"
        src={src}
        alt="Story"
      />
    </>
  );
}
