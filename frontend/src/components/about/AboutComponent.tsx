import { useNavigate } from "react-router-dom";

export default function AboutComponent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1558769132-cb1aea1c8db7?w=1600&h=1000&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-6 text-white">
          <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-tight animate-fadeIn">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide">
            Where Timeless Elegance Meets Modern Sophistication
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 italic">
            Our Philosophy
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-sans mb-6">
            At Élégance, we believe that true style transcends fleeting trends.
            Our mission is to curate collections that embody timeless
            sophistication, crafted for the modern woman who values quality,
            elegance, and individuality.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed font-sans">
            Every piece tells a story of meticulous craftsmanship, sustainable
            practices, and an unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">Our Journey</h2>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-light mb-4">
                  2015 - The Beginning
                </h3>
                <p className="text-gray-600 font-sans leading-relaxed">
                  Founded in the heart of New York City, Élégance began as a
                  small atelier with a bold vision: to redefine luxury fashion
                  for the conscious consumer. Our founder, inspired by European
                  craftsmanship and American innovation, set out to create
                  pieces that would stand the test of time.
                </p>
              </div>
              <div className="order-1 md:order-2 h-80 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&h=600&fit=crop"
                  alt="Atelier"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-80 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop"
                  alt="Fashion show"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4">
                  2018 - Global Recognition
                </h3>
                <p className="text-gray-600 font-sans leading-relaxed">
                  Our commitment to excellence earned us recognition at Paris
                  Fashion Week, where our debut collection received critical
                  acclaim. This milestone marked the beginning of our
                  international expansion and solidified our position in the
                  luxury fashion landscape.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-light mb-4">
                  2025 - Sustainable Future
                </h3>
                <p className="text-gray-600 font-sans leading-relaxed">
                  Today, we lead the industry in sustainable luxury fashion. Our
                  zero-waste initiative and commitment to ethical sourcing
                  demonstrate that elegance and responsibility can coexist
                  beautifully. We continue to innovate while honoring the
                  timeless principles that defined our beginning.
                </p>
              </div>
              <div className="order-1 md:order-2 h-80 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop"
                  alt="Sustainability"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                number: "01",
                title: "CRAFTSMANSHIP",
                text: "Every garment is meticulously crafted by skilled artisans, ensuring unparalleled quality and attention to detail in every stitch.",
              },
              {
                number: "02",
                title: "SUSTAINABILITY",
                text: "We're committed to ethical practices, using sustainable materials and supporting fair labor conditions throughout our supply chain.",
              },
              {
                number: "03",
                title: "TIMELESSNESS",
                text: "We design beyond trends, creating pieces that remain relevant and elegant for years, reducing waste and celebrating lasting style.",
              },
            ].map((value) => (
              <div key={value.number} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 border-2 border-black flex items-center justify-center">
                  <span className="text-3xl font-light">{value.number}</span>
                </div>
                <h3 className="text-xl font-light mb-4 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-sans leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-black text-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Isabella Laurent",
                role: "CREATIVE DIRECTOR",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
              },
              {
                name: "Marcus Chen",
                role: "HEAD DESIGNER",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
              },
              {
                name: "Sophia Anderson",
                role: "SUSTAINABILITY DIRECTOR",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="text-center group cursor-pointer"
              >
                <div className="mb-6 overflow-hidden bg-gray-800">
                  <img
                    src={member.img}
                    alt={member.role}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-light mb-2">{member.name}</h3>
                <p className="text-gray-400 text-sm tracking-wider font-sans">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 text-center">
          {[
            { value: "10+", label: "YEARS OF EXCELLENCE" },
            { value: "50K+", label: "SATISFIED CUSTOMERS" },
            { value: "100%", label: "SUSTAINABLE MATERIALS" },
            { value: "25+", label: "COUNTRIES WORLDWIDE" },
          ].map((stat) => (
            <div key={stat.label}>
              <h3 className="text-5xl font-light mb-4">{stat.value}</h3>
              <p className="text-gray-600 tracking-wider text-sm font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Join Our Journey</h2>
          <p className="text-gray-600 font-sans text-lg mb-10 leading-relaxed">
            Be part of our story. Discover collections that celebrate your
            unique style and values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="px-12 py-4 bg-black text-white tracking-widest text-sm hover:bg-gray-800 transition-colors"
            >
              EXPLORE COLLECTIONS
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-12 py-4 border-2 border-black text-black tracking-widest text-sm hover:bg-black hover:text-white transition-colors"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
