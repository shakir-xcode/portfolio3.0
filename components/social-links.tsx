import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a
        href="https://www.linkedin.com/in/shaker-f-77a352152/"
        className="w-12 h-12 rounded-md bg-[#191b1e] flex items-center justify-center hover:bg-[#ff014f] transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <a
        href="https://github.com/shakir-xcode"
        className="w-12 h-12 rounded-md bg-[#191b1e] flex items-center justify-center hover:bg-[#ff014f] transition-colors"
        aria-label="Github"
      >
        <Github size={20} />
      </a>
    </div>
  );
}
