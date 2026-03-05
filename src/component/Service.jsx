import { motion } from "framer-motion";
import { Code, Palette, Video } from "lucide-react";

function Services() {
  const services = [
    {
      title: "Web Development",
      icon: <Code size={40} />,
      description:
        "Modern, responsive and high-performance websites built using React, Tailwind CSS and latest technologies.",
    },
    {
      title: "Graphic Design",
      icon: <Palette size={40} />,
      description:
        "Creative branding, social media posts, logos, and marketing designs that make your business stand out.",
    },
    {
      title: "Video Editing",
      icon: <Video size={40} />,
      description:
        "Professional video editing for YouTube, social media, ads, and promotional content with smooth transitions.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            My Services
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I provide high-quality digital solutions to grow your brand and business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-indigo-600 mb-6 flex justify-center group-hover:scale-110 transition">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>

              <button className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                Learn More
              </button>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;