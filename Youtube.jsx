import React from "react";

const Youtube = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <iframe
        width="1120"
        height="650"
        src="https://www.youtube.com/embed/44gP-_ecQJc?si=xwF-ejQmjzf4TLkl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Youtube;
