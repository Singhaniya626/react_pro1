export default function AboutSection(): JSX.Element {
    return (
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-4 text-gray-700">
              We are a small team focused on delivering great web experiences. This is a short about section — change text as needed.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-40 bg-gray-200" />
              <div className="h-40 bg-gray-200" />
              <div className="h-40 bg-gray-200" />
              <div className="h-40 bg-gray-200" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  