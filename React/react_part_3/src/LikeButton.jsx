import { useState } from "react";
export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false); //Hooks || Hooks use only components
  let [clicks, setClicks] = useState(0);

  let toggleLike = () => {
    setIsLiked(!isLiked); //isLiked - true/false
    setClicks(clicks + 1); //increase value
  };
  let likeStyle = { color: "red" };
  return (
    <div>
      <p>clicks : {clicks}</p>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
