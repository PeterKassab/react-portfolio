import Image from "next/image"

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
    <div className="w-85 rounded-lg bg-white p-6 shadow-md">
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
            <h2 className="text-lg font-semibold">{name}</h2>
            <span className="text-sm text-neutral-600">{handle}</span>
          </div>
        </div>
        <blockquote>
          <p className="text-base text-neutral-600">
            {quote}
          </p>
        </blockquote>
      </div>
    </div>
  )
}