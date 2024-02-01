import Image, { StaticImageData } from "next/image";

export default ({ src, alt = "", cover, contain, className, priority = false }: { src: string | StaticImageData, alt?: string, className?: string, cover?: boolean, contain?: boolean, priority?: boolean }) => {
  const pageProps = cover ? {
    width: 0,
    height: 0,
    style: {
      width: "100%",
      height: "auto",
      objectFit: "cover"
    },
    objectFit: "cover"
  } : {
    width: 0,
    height: 0,
    style: {
      width: "100%",
      height: "auto"
    }
  }

  return (
    <Image
      src={src}
      alt={alt}
      {...pageProps}
      width={0}
      height={0}
      className={className}
      priority={priority}
      sizes="100vw"
      style={{
        width: "100%",
        height: (cover || contain) ? "100%" : "auto",
        objectFit: cover ? "cover" : contain ? "contain" : "fill",
        maxWidth: "100%",
        height: "auto"
      }} />
  );
}