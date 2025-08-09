import images from "@/content/images.json";
import { Container } from "@/components/ui/container";
import { GalleryClient } from "@/components/gallery/gallery-client";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <main>
      <Container className="py-12">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <GalleryClient images={images} />
      </Container>
    </main>
  );
}


