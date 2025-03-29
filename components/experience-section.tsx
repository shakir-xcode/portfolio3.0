import { Briefcase, Calendar } from "lucide-react"

export default function ExperienceSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-2">MY JOURNEY</h2>
        <h3 className="text-4xl font-bold relative inline-block">
          Work <span className="text-[#ff014f]">Experience</span>
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff014f] to-transparent"></span>
        </h3>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-[#191b1e] rounded-lg p-8 relative overflow-hidden hover:shadow-xl transition-all duration-300">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff014f]/5 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#ff014f]/5 rounded-tr-full"></div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-[#212428] rounded-lg flex items-center justify-center">
                <Briefcase size={28} className="text-[#ff014f]" />
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h4 className="text-2xl font-bold">Mir Web Solutions</h4>
                <span className="flex items-center gap-1 text-sm bg-[#ff014f]/10 text-[#ff014f] px-3 py-1 rounded-full">
                  <Calendar size={14} />
                  <span>03 Month</span>
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed">
                During my internship at Mir Web Solutions, I had the opportunity to work on developing and delivering
                websites for various clients. I was involved in creating user-friendly and responsive websites,
                collaborating with designers and project managers to ensure that client needs were met. In addition to
                my core development work, I also gained experience with WordPress and related tools, allowing me to
                broaden my skill set and better understand content management systems. This internship taught me
                valuable time management skills, as I worked on multiple projects simultaneously, meeting client
                deadlines and managing development priorities effectively. Overall, the experience helped me grow as a
                developer and prepared me for a full-time role in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

