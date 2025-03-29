import Image from "next/image";
import { Code, Lightbulb, Zap } from "lucide-react";
import aboutImage from "@/public/hero_bg2.png";

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
          ABOUT ME
        </h2>
        <h3 className="text-4xl font-bold relative inline-block">
          My <span className="text-[#ff014f]">Background</span>
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff014f] to-transparent"></span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="bg-[#191b1e] p-6 rounded-lg relative z-10">
            <Image
              // src="/placeholder.svg?height=500&width=400"
              src={aboutImage}
              alt="About Me"
              width={400}
              height={500}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#ff014f] rounded-lg -z-0"></div>
        </div>

        <div>
          <h4 className="text-2xl font-bold mb-4">
            A passionate developer with a creative edge
          </h4>

          <p className="text-gray-400 mb-6">
            I am a dedicated web developer with a strong foundation in
            Information Technology. My academic background includes Bachelor's
            and Master's in Information Technology. I specialize in full-stack
            development, with a focus on the MERN stack. Through practical
            experience and academic pursuits, I have developed a solid
            understanding of modern web technologies. I am eager to apply my
            skills to challenging projects and contribute to innovative
            solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#191b1e] p-5 rounded-lg hover:bg-gradient-to-b hover:from-[#191b1e] hover:to-[#24272c] transition-all duration-300">
              <div className="text-[#ff014f] mb-3">
                <Code size={24} />
              </div>
              <h5 className="text-lg font-semibold mb-2">Clean Code</h5>
              <p className="text-gray-400 text-sm">
                I write clean, maintainable code that follows best practices and
                industry standards.
              </p>
            </div>

            <div className="bg-[#191b1e] p-5 rounded-lg hover:bg-gradient-to-b hover:from-[#191b1e] hover:to-[#24272c] transition-all duration-300">
              <div className="text-[#ff014f] mb-3">
                <Zap size={24} />
              </div>
              <h5 className="text-lg font-semibold mb-2">Fast Performance</h5>
              <p className="text-gray-400 text-sm">
                Performance optimization is at the core of everything I build,
                ensuring lightning-fast experiences.
              </p>
            </div>
          </div>

          <div className="bg-[#191b1e] p-5 rounded-lg hover:bg-gradient-to-b hover:from-[#191b1e] hover:to-[#24272c] transition-all duration-300">
            <div className="text-[#ff014f] mb-3">
              <Lightbulb size={24} />
            </div>
            <h5 className="text-lg font-semibold mb-2">Innovative Solutions</h5>
            <p className="text-gray-400 text-sm">
              I don't just solve problems—I find innovative ways to turn
              challenges into opportunities for growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
