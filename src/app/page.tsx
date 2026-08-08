import TestimonialCard from "@/components/ui/TestimonialCard"
import BlogCard from "@/components/ui/BlogCard"
import { testimonials } from "@/data/testimonials"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-page">
      {testimonials.map((item) => (
        <TestimonialCard key={item.id} {...item} />
      ))}
      <BlogCard />
    </div>
  )
}
