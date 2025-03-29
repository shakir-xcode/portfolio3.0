"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Project, projects } from "@/info";

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
          MY WORK
        </h2>
        <h3 className="text-4xl font-bold relative inline-block">
          Recent <span className="text-[#ff014f]">Projects</span>
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff014f] to-transparent"></span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#191b1e] pt-8 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            onClick={() => openProjectModal(project)}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191b1e] to-transparent opacity-70"></div>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-xs bg-[#ff014f]/10 text-[#ff014f] rounded-full mb-3">
                {project.category}
              </span>
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  Click to view details
                </span>
                <span className="w-8 h-8 rounded-full bg-[#212428] flex items-center justify-center">
                  <ExternalLink size={14} className="text-[#ff014f]" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-[#ff014f]">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <div className="relative h-64 w-[400px] mx-auto mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Project Overview
                  </h4>
                  <p
                    className="text-gray-400"
                    dangerouslySetInnerHTML={{
                      __html: selectedProject.fullDescription,
                    }}
                  />
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#212428] text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#212428] text-white rounded-lg hover:bg-[#ff014f] transition-colors"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#ff014f] text-white rounded-lg hover:bg-[#d4013f] transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
