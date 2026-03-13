import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Clock, Paintbrush, Droplets, SprayCan, Home, Star, Quote, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hola.png";
import aboutTeam from "@/assets/about-team.jpg";
import interiorImg from "@/assets/interior-painting.jpg";
import pressureImg from "@/assets/pressure-washing.jpg";
const gallery1 = "/lovable-uploads/079b9e6a-73da-47e8-a06f-9928235327ec.png";
const gallery2 = "/lovable-uploads/c103a4a5-0977-4e2e-9722-f22494d70ff3.png";
const gallery7 = "/lovable-uploads/c20fd364-e9ff-4e5f-83db-2754bec9438c.png";
const gallery5 = "/lovable-uploads/a430cd09-9737-4e07-bd0e-1bb02d228ccd.png";

const services = [
  {
    icon: Paintbrush,
    title: "Interior Painting",
    img: interiorImg,
    desc: "We provide clean, precise interior painting that refreshes and enhances the look of your home or business. From walls and ceilings to trim and doors, we make your space look new again."
  },
  {
    icon: Home,
    title: "Exterior Painting",
    img: "/lovable-uploads/0edda452-bbc2-4400-a469-3a6189039451.png",
    desc: "Protect and beautify your property with our professional exterior painting services. We use durable, high-quality materials to ensure a long-lasting finish that withstands weather and time."
  },
  {
    icon: Droplets,
    title: "Epoxy Floor Coatings",
    img: "/lovable-uploads/98cfd60d-e4cb-474d-8452-ea95669b2869.png",
    desc: "Our epoxy flooring systems are perfect for garages, patios, and commercial spaces. They provide a strong, durable, and modern finish that is easy to maintain and resistant to stains and damage."
  },
  {
    icon: SprayCan,
    title: "Pressure Washing",
    img: pressureImg,
    desc: "We remove dirt, mold, mildew, and stains from surfaces like driveways, walls, sidewalks, and exterior siding, restoring the clean look of your property."
  },
  {
    icon: Paintbrush,
    title: "Cabinet Painting & Refinishing",
    img: "/lovable-uploads/bde6c085-fdf8-42e0-9be7-ff8c18dd596c.png",
    desc: "Give your kitchen or bathroom a fresh, modern look without replacing your cabinets. Our cabinet painting service delivers a smooth and durable finish that transforms your space."
  }
];


const whyChoose = [
{ icon: Star, title: "Experienced Professionals", desc: "With over 6 years of experience, we have the knowledge and skills to deliver high-quality results on every project." },
{ icon: CheckCircle, title: "Quality Workmanship", desc: "We pay attention to every detail and use quality materials to ensure a clean, durable, and professional finish that lasts." },
{ icon: Clock, title: "Reliable and On-Time", desc: "We respect your time and your property. Our team shows up on time, works efficiently, and completes projects as scheduled." },
{ icon: Home, title: "Residential & Commercial", desc: "From homes to businesses, we provide professional interior and exterior painting tailored to meet your needs." },
{ icon: Paintbrush, title: "Additional Services", desc: "Beyond painting, we also offer epoxy floors, pressure washing, and cabinet painting, helping you improve and protect your property." },
{ icon: Shield, title: "Customer Satisfaction First", desc: "Our goal is to make every client happy. We believe integrity and professionalism create long-term relationships and satisfied customers." }];


const testimonials = [
{ name: "Michael R.", text: "JGMB Painting did an incredible job on our home's exterior. The crew was professional, on time, and the results exceeded our expectations. Highly recommend!" },
{ name: "Sarah T.", text: "We hired JGMB for interior painting and cabinet refinishing. The attention to detail was outstanding — our kitchen looks brand new. Great communication throughout the project." },
{ name: "Daniel P.", text: "Fantastic work on our epoxy garage floor. The team was clean, efficient, and the finished product looks amazing. We've already recommended them to our neighbors." }];


const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75svh] flex items-center">
        <div className="absolute inset-0">
          <video
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container-site py-20 md:py-28">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-primary-foreground mb-6 text-center">
              
              Your Property Deserves a Professional Finish
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
              className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 font-body text-center">
              
              From interior and exterior painting to epoxy floors and pressure washing, JGMB Painting delivers results you can trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
              className="flex-wrap gap-4 mb-8 flex items-center justify-center">
              
              {["Professional Work", "Reliable Service", "6+ Years of Experience"].map((item) =>
              <span key={item} className="flex items-center gap-2 text-sm text-primary-foreground/90 font-medium">
                  <CheckCircle size={16} className="text-accent" />
                  {item}
                </span>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.3 }}
              className="flex-wrap gap-4 flex items-center justify-center">
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.98]">
                
                Get a Free Estimate
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-transparent text-primary-foreground font-semibold text-sm ring-1 ring-primary-foreground/30 transition-colors duration-200 hover:bg-primary-foreground/10">
                
                View Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Icons Bar */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="container-site">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium">
            {["Residential & Commercial", "Interior & Exterior Painting", "Epoxy Floors", "Pressure Washing", "Cabinet Painting"].map((item) =>
            <span key={item} className="flex items-center gap-2 opacity-80">
                <CheckCircle size={14} />
                {item}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* About Preview with image */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">About Our Company</p>
              <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground mb-6">
                Built on Quality, Integrity, and Trust
              </h2>
              <p className="font-body text-lg leading-relaxed text-muted-foreground mb-4">
                At JGMB Painting, we take pride in delivering high-quality painting services with professionalism, reliability, and attention to detail. With over 6 years of experience in the industry, our team specializes in both residential and commercial projects.
              </p>
              <p className="font-body text-lg leading-relaxed text-muted-foreground mb-8">
                Our mission is simple: to provide honest work, excellent craftsmanship, and complete customer satisfaction.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200">
                
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <img src={aboutTeam} alt="JGMB Painting team" className="w-full rounded-2xl object-cover aspect-[4/3] shadow-elevated" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview with images */}
      <section className="section-padding bg-muted/50">
        <div className="container-site">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What We Do</p>
              <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground">
                Our Services
              </h2>
            </div>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {services.map((service) =>
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] } }
              }}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-200">
              
                <img
                src={service.img}
                alt={service.title}
                className="w-full aspect-[16/10] object-cover"
                loading="lazy" />
              
                <div className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <service.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-sans font-semibold text-xl text-foreground mb-2">{service.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                </div>
              </motion.div>
            )}
          </motion.div>

          <AnimatedSection className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.98]">
              
              See All Services <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-site">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Why Choose Us</p>
              <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground">
                Why Choose JGMB Painting
              </h2>
            </div>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {whyChoose.map((item) =>
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] } }
              }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-200">
              
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-sans font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-muted/50">
        <div className="container-site">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Work</p>
              <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground">
                Recent Projects
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[gallery1, gallery2, gallery7, gallery5].map((img, i) =>
            <AnimatedSection key={i} delay={i * 0.07}>
                <img src={img} alt={`Project ${i + 1}`} className="w-full aspect-square object-cover rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-200" loading="lazy" />
              </AnimatedSection>
            )}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200">
              
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-site">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Testimonials</p>
              <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight">
                What Our Clients Say
              </h2>
            </div>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {testimonials.map((t) =>
            <motion.div
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] } }
              }}
              className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm">
              
                <Quote size={24} className="text-accent mb-4 opacity-70" />
                <p className="font-body text-sm leading-relaxed mb-4 opacity-90">{t.text}</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">
                    {t.name[0]}
                  </div>
                  <span className="font-sans font-semibold text-sm">{t.name}</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-site">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground mb-4">
                Ready to Refresh Your Property?
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                Contact JGMB Painting today for a free estimate and let's bring new life to your home or business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.98]">
                  
                  Get Free Estimate
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-transparent text-primary font-semibold text-sm ring-1 ring-primary/30 transition-colors duration-200 hover:bg-primary/5">
                  
                  Contact Us
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>);

};

export default HomePage;