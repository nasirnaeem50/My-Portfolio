import { FiMapPin, FiMail, FiPhone, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-[#1e293b] mb-4 font-['Calibre',_'_Inter',_sans-serif]">
              Contact Me
            </h1>
            <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
              I'm currently open to full-time, contract, or part-time opportunities in Frontend Development.
            </p>
            <div className="w-20 h-1 bg-[#4338ca] mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-[#f8fafc] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-[#1e293b] mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-[#e0e7ff] p-3 rounded-full text-[#4338ca] group-hover:bg-[#4338ca] group-hover:text-white transition-colors duration-300">
                    <FiMapPin className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1e293b]">Location</h3>
                    <p className="text-[#64748b]">Peshawar,Pakistan</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-[#e0e7ff] p-3 rounded-full text-[#4338ca] group-hover:bg-[#4338ca] group-hover:text-white transition-colors duration-300">
                    <FiMail className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1e293b]">Email</h3>
                    <a 
                      href="mailto:ochidmiel@gmail.com" 
                      className="text-[#64748b] hover:text-[#4338ca] transition-colors duration-300"
                    >
                      nasirnaeem66@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-[#e0e7ff] p-3 rounded-full text-[#4338ca] group-hover:bg-[#4338ca] group-hover:text-white transition-colors duration-300">
                    <FiPhone className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1e293b]">Phone</h3>
                    <a 
                      href="tel:+2348144340972" 
                      className="text-[#64748b] hover:text-[#4338ca] transition-colors duration-300"
                    >
                      +923138059759
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-[#f8fafc] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-[#1e293b] mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#334155] mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-[#e2e8f0]'} rounded-lg focus:ring-2 focus:ring-[#4338ca] focus:border-transparent transition-all duration-300`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#334155] mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-[#e2e8f0]'} rounded-lg focus:ring-2 focus:ring-[#4338ca] focus:border-transparent transition-all duration-300`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#334155] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register("message", { required: "Message is required" })}
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-[#e2e8f0]'} rounded-lg focus:ring-2 focus:ring-[#4338ca] focus:border-transparent transition-all duration-300`}
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#4338ca] to-[#3730a3] hover:from-[#3730a3] hover:to-[#4338ca] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <FiSend className="transition-transform duration-300 group-hover:translate-x-1" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}