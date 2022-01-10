import Image from "next/image";
import React from "react";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}"   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Shimmer = ({ src, alt, className, height, width }) => (
  <Image alt={alt}
         src={src}
         className={className}
         placeholder="blur"
         blurDataURL={src}
         loading="lazy"
    // blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
         quality={100}
         height={height}
         width={width}
         layout='fill'
         objectFit='contain'/>
);

export default Shimmer;