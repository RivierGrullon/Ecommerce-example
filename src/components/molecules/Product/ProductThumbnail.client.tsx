import { Button } from "@components/atoms/Button/index";
import { Icon } from "@components/atoms/Icons/index";
import { Image, Props } from "@components/atoms/Image/index";
import { useState } from "react";

interface ThumbnailProps extends Props {
  liked?: boolean;
}

export function ProductThumbnail({
  src,
  alt,
  className,
  liked,
}: ThumbnailProps): JSX.Element {
  const [isLiked, setIsLiked] = useState(liked);

  function handleCLick() {
    setIsLiked(!isLiked);
  }
  return (
    <div className={`relative w-64 ${className}`}>
      <Image src={src} alt={alt} className="block"></Image>
      <Button
        className={" rounded-full absolute bottom-0 right-0 bg-gray-500"}
        onClick={handleCLick}
      >
        {isLiked ? (
          <Icon icon="heart" filled={true}/>
        ) : (
          <Icon icon="heart" className={"text-white"}/>
        )}
      </Button>
    </div>
  );
}
