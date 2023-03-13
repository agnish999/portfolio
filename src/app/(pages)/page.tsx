import Contact from "./(home)/Contact";
import FeaturedBlogs from "./(home)/FeaturedBlogs";
import Hero from "./(home)/Hero";
import Work from "./(home)/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <FeaturedBlogs />
      <Contact />
    </main>
  );
}
