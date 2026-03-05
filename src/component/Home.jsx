import { motion } from "framer-motion";
import { Code, Palette, Video } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi, I'm a Creative <br />
            Web Developer & Designer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg md:text-xl text-gray-200"
          >
            I build modern websites, stunning designs and professional videos
            that grow your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex justify-center gap-4"
          >
            <Link
              to="/service"
              className="px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:scale-105 transition"
            >
              My Services
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-indigo-600 transition"
            >
              Contact Me
            </Link>
          </motion.div>

        </div>
      </section>


      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            What I Do
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                icon: <Code size={40} />,
                title: "Web Development",
                text: "Responsive, fast and SEO-friendly websites."
              },
              {
                icon: <Palette size={40} />,
                title: "Graphic Design",
                text: "Branding, social media posts & creative visuals."
              },
              {
                icon: <Video size={40} />,
                title: "Video Editing",
                text: "Professional editing for YouTube & Ads."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="text-indigo-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* WHY CHOOSE ME */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            alt="Work"
            className="rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Work With Me?
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li>✔ Modern & Clean Design</li>
              <li>✔ Fast Delivery</li>
              <li>✔ Client Satisfaction Focused</li>
              <li>✔ 100% Responsive</li>
              <li>✔ Affordable Pricing</li>
            </ul>
          </div>

        </div>
      </section>


      {/* CALL TO ACTION */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Start Your Project?
        </h2>

        <p className="mt-4 text-gray-200">
          Let’s create something amazing together.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-8 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:scale-105 transition"
        >
          Get In Touch
        </Link>
      </section>

    </div>
  );
}

export default Home;