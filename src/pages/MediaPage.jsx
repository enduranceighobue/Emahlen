import { MediaHero } from "../components/MediaHero";
import MediaGallery from "../components/MediaGallery";
import media from "../data/media";





export default function MediaPage() {
  return (
    <>
      <MediaHero />
       <main className="bg-black min-h-screen">
      <MediaGallery media={media} />
    </main>

      {/* Add other About sections here */}
    </>
  );
}