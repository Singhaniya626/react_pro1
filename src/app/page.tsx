import BannerSlider from '../../components/BannerSlider';
import CardSection from '../../components/CardSection';
import Testimonials from '../../components/Testimonials';
import AboutSection from '../../components/AboutSection';
import ImageSliderGrid from '../../components/ImageSliderGrid';

export default function HomePage() {
  return (
    <div>
      <BannerSlider />
      <CardSection />
      <Testimonials />
      <AboutSection />
      <ImageSliderGrid />
    </div>
  );
}
