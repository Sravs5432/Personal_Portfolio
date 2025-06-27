import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  Mail, Phone, MapPin, Send,
  Github, Linkedin, Code, MessageCircle, FileText, Heart
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const serviceId = "service_d9u1z4y";      // 👉 e.g., "service_123abc"
    const templateId = "template_jmt4i4x";    // 👉 e.g., "template_xzy321"
    const publicKey = "1DezaiD0Smjvqo1Ox";      // 👉 e.g., "h1xkA7tWmS..."

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast.success("Message sent successfully! 🎉");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send. Please try again later.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white relative overflow-hidden transition-colors duration-500">
      {/* Glowing background circles */}
      <div className="absolute top-20 right-20 w-48 h-48 bg-indigo-400/10 dark:bg-indigo-500/20 rounded-full blur-3xl floating" />
      <div className="absolute bottom-20 left-20 w-36 h-36 bg-amber-300/10 dark:bg-amber-400/20 rounded-full blur-2xl floating" />
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-300/10 dark:bg-indigo-400/20 rounded-full blur-xl floating" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageCircle className="text-amber-400 dark:text-amber-400 animate-pulse" size={32} />
            <h2 className="text-4xl sm:text-5xl font-bold">Get In Touch</h2>
            <Heart className="text-indigo-500 dark:text-indigo-500 animate-pulse" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-amber-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg">
            I'm always open to collaboration or questions. Drop me a message!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Panel */}
          <div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-md space-y-8">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Contact Info</h3>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-500 rounded-2xl">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">lopintisravanthi@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-400/20 text-amber-500 rounded-2xl">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium">+91 7780353343</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-400/20 text-indigo-500 rounded-2xl">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium">Vizianagaram, India</p>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                <h4 className="text-lg font-semibold mb-4">Social Links</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/Sravs5432" target="_blank" rel="noopener" className="p-3 bg-slate-100 dark:bg-slate-700 rounded-2xl hover:bg-indigo-500 hover:text-white">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/sravanthi-lopinti" target="_blank" rel="noopener" className="p-3 bg-slate-100 dark:bg-slate-700 rounded-2xl hover:bg-indigo-500 hover:text-white">
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://leetcode.com/u/Sravanthi2288"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 dark:bg-slate-700 rounded-2xl hover:bg-indigo-500 hover:text-white transition-all"
                  >
                    <Code size={20} /> 
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-6 shadow-md">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Send Message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-slate-100 dark:bg-slate-700 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-100 dark:bg-slate-700 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-slate-100 dark:bg-slate-700 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-100 dark:bg-slate-700 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600"
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-amber-400 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-20 text-center">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-500 dark:text-amber-400 mb-4">Ready to Work Together?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              I'm currently seeking internships and entry-level roles. Let's build something awesome!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+917780353343" className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
                <Phone size={16} />
                <span>Schedule a Call</span>
              </a>
              <a href="/LopintiSravanthiResume.pdf" download className="border border-indigo-500 text-indigo-500 px-6 py-3 rounded-xl hover:bg-indigo-500 hover:text-white transition-all flex items-center gap-2">
                <FileText size={16} />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
