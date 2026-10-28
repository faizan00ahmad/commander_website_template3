/* eslint-disable @next/next/no-img-element */
import { img } from "@/lib/data";

export default function Img({ name, alt = "", className = "" }: { name: string; alt?: string; className?: string }) {
  return <img src={img(name)} alt={alt} loading="lazy" className={className} />;
}
