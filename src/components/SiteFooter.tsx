import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  { to: "/services", label: "Interior Painting" },
  { to: "/services", label: "Exterior Painting" },
  { to: "/services", label: "Epoxy Floors" },
  { to: "/services", label: "Pressure Washing" },
  { to: "/services", label: "Cabinet Painting" },
];

const SiteFooter = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container-site section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img src={logo} alt="JGMB Painting logo" className="h-10 mb-4 brightness-0 invert" />
          <p className="text-sm leading-relaxed opacity-70">
            JGMB Painting provides professional painting and remodeling services with quality workmanship, reliable service, and attention to detail.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-sans font-semibold text-sm mb-4 uppercase tracking-wider opacity-50">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-sans font-semibold text-sm mb-4 uppercase tracking-wider opacity-50">Services</h4>
          <ul className="space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans font-semibold text-sm mb-4 uppercase tracking-wider opacity-50">Contact</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li>jgmb.painting@gmail.com</li>
            <li>Winter Garden, FL</li>
          </ul>
          <Link
            to="/contact"
            className="inline-flex mt-6 items-center justify-center px-6 py-2.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.98]"
          >
            Get Free Estimate
          </Link>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
        <p className="text-xs opacity-50">
          © {new Date().getFullYear()} JGMB Painting & Remodeling. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
