import React from "react";
import useFirestore from "../hooks/useFirestore";

export default function ImageGallery() {
  const { docs } = useFirestore("images");

  return (
    <div className="image-gallery">
      {docs &&
        docs.map((doc) => (
          <div className="image-wrap" key={doc.id}>
            <img src={doc.url} alt="pic" />
          </div>
        ))}
    </div>
  );
}

// {docs &&
//     docs.map((doc) => {
//       return (
//         <div className="image-wrap" key={doc.id}>
//           <img src={doc.url} alt="pic" />
//         </div>
//       );
//     })}
