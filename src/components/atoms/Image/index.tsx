export interface Props {
  src: string;
  alt: string;
  className?: string;
  height?: string;
  width?: string;
}

export function Image({ src, alt, className, height, width }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      height={height}
      width={width}
    />
  );
}
