import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

import interiorImg from "@/assets/interior-painting.jpg";
import exteriorImg from "@/assets/exterior-painting.jpg";
import cabinetImg from "@/assets/cabinet-painting.jpg";
import paintingTeam from "@/assets/painting-team.jpg";
import paintingSupplies from "@/assets/painting-supplies.jpg";
import paintingProcess from "@/assets/painting-process-1.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery7 from "@/assets/gallery-7.jpg";

const PaintingPage = () => (
  <>
    <PageBanner
      title="Professional Painting"
      subtitle="Expert interior and exterior painting services for homes and businesses in Winter Garden, FL."
    />

    {/* Intro with image */}
    <section className="section-padding">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Expertise</p>
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground mb-6">
              Painting Done Right, Every Time
            </h2>
            <p className="font-body text-lg leading-relaxed text-muted-foreground mb-4">
              At JGMB Painting, we bring over 6 years of hands-on experience to every project. Whether it's a single accent wall or an entire commercial building, our team delivers clean, precise, and long-lasting results.
            </p>
            <p className="font-body text-lg leading-relaxed text-muted-foreground mb-6">
              We use only premium-quality paints and materials, combined with proven techniques that ensure a smooth, professional finish that stands the test of time.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Premium Materials", "Clean Workmanship", "On-Time Delivery", "Free Estimates"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <CheckCircle size={16} className="text-primary" /> {item}
                </span>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <img src={paintingTeam} alt="JGMB painting team at work" className="w-full rounded-2xl object-cover aspect-[4/3] shadow-elevated" />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Interior Painting */}
    <section className="section-padding bg-muted/50">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <img src={interiorImg} alt="Interior painting professional" className="w-full rounded-2xl object-cover aspect-[4/3] shadow-elevated" />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Interior Painting</p>
            <h2 className="font-sans font-bold text-3xl tracking-tight text-foreground mb-4">
              Transform Your Interior Spaces
            </h2>
            <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
              From living rooms and bedrooms to offices and retail spaces, our interior painting service refreshes and enhances any environment. We handle walls, ceilings, trim, doors, and accent features with precision and care.
            </p>
            <ul className="space-y-3 mb-6">
              {["Walls, ceilings, trim & doors", "Color consultation available", "Clean and dust-free process", "Minimal disruption to your routine"].map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm font-body text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.98]">
              Get Interior Quote <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Exterior Painting */}
    <section className="section-padding">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="order-2 lg:order-1">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Exterior Painting</p>
            <h2 className="font-sans font-bold text-3xl tracking-tight text-foreground mb-4">
              Protect & Beautify Your Property
            </h2>
            <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
              Your property's exterior is the first thing people see. Our exterior painting services protect your investment while dramatically improving curb appeal with weather-resistant, durable finishes.
            </p>
            <ul className="space-y-3 mb-6">
              {["Weather-resistant premium paints", "Thorough surface preparation", "Siding, stucco, brick & wood", "Enhances property value"].map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm font-body text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.98]">
              Get Exterior Quote <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="order-1 lg:order-2">
            <img src={exteriorImg} alt="Exterior painting on ladder" className="w-full rounded-2xl object-cover aspect-[4/3] shadow-elevated" />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Cabinet Painting */}
    <section className="section-padding bg-muted/50">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <img src={cabinetImg} alt="Freshly painted kitchen cabinets" className="w-full rounded-2xl object-cover aspect-[4/3] shadow-elevated" />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Cabinet Painting</p>
            <h2 className="font-sans font-bold text-3xl tracking-tight text-foreground mb-4">
              Refresh Your Cabinets
            </h2>
            <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
              Give your kitchen or bathroom a completely new look without the cost of replacing cabinets. Our cabinet refinishing delivers a smooth, factory-quality finish that transforms your space.
            </p>
            <ul className="space-y-3 mb-6">
              {["Smooth, factory-quality finish", "Fraction of replacement cost", "Kitchen & bathroom cabinets", "Wide range of colors & finishes"].map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm font-body text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.98]">
              Get Cabinet Quote <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding">
      <div className="container-site">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Process</p>
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground">
              How We Work
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { num: "01", title: "Consultation", desc: "We visit your property, discuss your vision, and provide a detailed free estimate.", img: paintingSupplies },
            { num: "02", title: "Preparation", desc: "Thorough surface prep including cleaning, sanding, taping, and priming for perfect adhesion.", img: paintingProcess },
            { num: "03", title: "Execution", desc: "Expert application with premium materials, followed by a careful walkthrough and cleanup.", img: gallery1 },
          ].map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.1}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-200">
                <img src={step.img} alt={step.title} className="w-full aspect-[16/10] object-cover" loading="lazy" />
                <div className="p-6">
                  <span className="text-3xl font-bold text-primary/20">{step.num}</span>
                  <h3 className="font-sans font-semibold text-xl text-foreground mt-1 mb-2">{step.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Results showcase */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-site">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight mb-4">
              See the Results
            </h2>
            <p className="font-body text-lg opacity-80">Some of our recent painting transformations.</p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[gallery1, gallery7, interiorImg, cabinetImg].map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.07}>
              <img src={img} alt={`Painting result ${i + 1}`} className="w-full aspect-square object-cover rounded-xl" loading="lazy" />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.98]"
          >
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-site text-center">
        <AnimatedSection>
          <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground mb-4">
            Ready to Start Your Painting Project?
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and estimate. We're ready to bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.98]"
          >
            Get Your Free Estimate
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default PaintingPage;
