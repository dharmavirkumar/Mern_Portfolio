function About() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="mt-4 text-gray-600">
            Learn more about our mission, vision, and team.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Team"
            className="rounded-2xl shadow-lg"
          />

          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              We are a passionate team of developers building modern web 
              applications using React and Tailwind CSS. Our goal is to 
              deliver high-quality, scalable, and beautiful digital products.
            </p>
            <p className="text-gray-600">
              With a focus on innovation and user experience, we help 
              businesses grow through technology.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;