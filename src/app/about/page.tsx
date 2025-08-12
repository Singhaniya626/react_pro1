// src/about/page.tsx
import ImageSliderGrid from '../../../components/ImageSliderGrid';

export default function AboutPage() {
  return (
    <div className="p-4">
      {/* Banner Section */}
      <div className="bg-gray-300 h-40 flex items-center justify-center">
        <h1 className="text-3xl font-bold">About Us Banner</h1>
      </div>

      {/* About Page Text */}
      <p className="mt-4">
        This is the about page content. You can add company details here.
      </p>

      {/* Image Slider Grid Section */}
      <div className="mt-8">
        <ImageSliderGrid />
      </div>
    </div>
  );
}
