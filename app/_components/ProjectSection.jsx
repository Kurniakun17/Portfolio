import Project from "@/components/ui/Project";
import React from "react";

const ProjectsSection = () => {
  return (
    <div id="projects" className="rounded-xl flex flex-col items-center gap-6">
      <div className="flex flex-col justify-start items-start w-full">
        <div className="text-[#97979e] font-bold">Previous</div>
        <div className="font-bold text-3xl">Projects</div>
      </div>

      <div className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-2">
        <Project
          src="/kulinearan"
          isImageTop
          title="Kulinearan"
          description="an online food & restaurant guide"
          link="https://bg1mkv4b-3000.asse.devtunnels.ms/"
        />

        <Project
          src="/JagoLomba"
          title="JagoLomba"
          description="a competition platform"
          link="https://dev.jagolomba.id"
        />

        <Project
          src="/daly"
          title="Daly Content Agency"
          isImageTop
          description="a content agency website"
          link="https://www.dalycontentagency.com/"
        />

        <Project
          src="/quizifyyy"
          title="Quizifyyy"
          description="a quiz web app"
          link="https://quizifyyy.vercel.app"
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
