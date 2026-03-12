import { Link } from "react-router-dom";
import { Shield, Award, Clock, Eye, Wrench, Heart } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const values = [
  { icon: Shield, title: "Integrity", desc: "We believe in honest work and transparent communication with every client." },
  { icon: Award, title: "Professionalism", desc: "Our team maintains the highest standards of conduct and quality on every project." },
  { icon: Clock, title: "Reliability", desc: "We show up on time, meet deadlines, and deliver consistent results you can count on." },
  { icon: Eye, title: "Attention to Detail", desc: "Every surface, edge, and corner receives careful preparation and precise finishing." },
  { icon: Wrench, title: "Quality Craftsmanship", desc: "Using proven techniques and quality materials, we ensure finishes that look great and last." },
  { icon: Heart, title: "Customer Satisfaction", desc: "Your happiness is our measure of success. We're not done until you're delighted." },
];

const AboutPage = () => (
  <>
    <PageBanner
      title="About JGMB Painting"
      subtitle="Professional painting and remodeling services built on quality, integrity, and customer satisfaction."
    />

    {/* Story */}
    <section className="section-padding">
      <div className="container-site">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground mb-6">Our Story</h2>
            <div className="space-y-5 font-body text-lg leading-relaxed text-muted-foreground">
              <p>At JGMB Painting, we take pride in delivering high-quality painting services with professionalism, reliability, and attention to detail. With over 6 years of experience in the industry, our team specializes in both residential and commercial projects, helping homeowners and businesses transform their spaces with beautiful, long-lasting finishes.</p>
              <p>We offer a wide range of services including interior and exterior painting, epoxy flooring, pressure washing, and cabinet painting. Every project we take on is treated with care, using quality materials and proven techniques to ensure outstanding results.</p>
              <p>Our mission is simple: to provide honest work, excellent craftsmanship, and complete customer satisfaction. We believe that integrity and professionalism are the keys to making our clients happy, and that's the standard we bring to every job.</p>
              <p>Whether you're refreshing a single room, upgrading your floors with epoxy, or giving your entire property a new look, JGMB Painting is committed to delivering results you can trust.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-muted/50">
      <div className="container-site">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Values</p>
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground">
              What Drives Us Every Day
            </h2>
          </div>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] } },
              }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <v.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-sans font-semibold text-lg text-foreground mb-2">{v.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Trust */}
    <section className="section-padding">
      <div className="container-site">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground mb-6">
              Why Homeowners and Businesses Trust Us
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["6+ years of experience", "Residential & commercial", "Quality materials", "Dependable service", "Long-lasting finishes"].map((item) => (
                <span key={item} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.98]"
            >
              Request Your Free Estimate
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default AboutPage;
