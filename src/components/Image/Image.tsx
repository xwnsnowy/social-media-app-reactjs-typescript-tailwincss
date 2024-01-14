import { useState, forwardRef, ImgHTMLAttributes, Ref } from "react";
import images from "../../assets/images";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className: string;
  fallback: string;
}

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customFallback = images.noImage,
      ...props
    }: ImageProps,
    ref: Ref<HTMLImageElement>,
  ) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={className}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  },
);

export default Image;
