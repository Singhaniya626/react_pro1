import BannerSlider from '../../components/BannerSlider';
import Testimonials from '../../components/Testimonials';
import AboutSection from '../../components/AboutSection';
import ImageSliderGrid from '../../components/ImageSliderGrid';

export default function HomePage() {
  return (
    <div>
      <BannerSlider />
      
      {/* Left 3 Grid - Right Single Card */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-200 p-4 rounded">Card {i}</div>
          ))}
        </div>
        <div className="bg-gray-300 p-4 rounded">Right Side Card</div>
      </section>

      <Testimonials />
      <AboutSection />
      <ImageSliderGrid />
    </div>
  );
}
