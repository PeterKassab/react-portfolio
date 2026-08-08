import Image from "next/image"
import Card from "./Card";

export type TestimonialCardProps = {
  id: number;
  imageSrc: string;
  name: string;
  handle: string;
  quote: string;
}

export default function TestimonialCard({
  id,
  imageSrc,
  name,
  handle,
  quote
}: TestimonialCardProps) {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={imageSrc}
            alt={name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold text-foreground">{name}</h2>
            <span className="text-sm text-foreground-muted">{handle}</span>
          </div>
        </div>
        <blockquote>
          <p className="text-base text-foreground-muted">
            {quote}
          </p>
        </blockquote>
      </div>
    </Card>
  )
}