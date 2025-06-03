export type Link = {
  label: string;
  to: string;
};

export const links: Link[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonial", to: "/testimonial" },
  { label: "Blog", to: "/blog" },
];
