interface ImageProps {
  src: string;
  alt: string;
  rounded?: boolean;
  className?: string;
}

export default function Image({
  src,
  alt,
  rounded = false,
  className = "",
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${rounded ? "rounded-full" : "rounded"} ${className}`}
    />
  );
}
