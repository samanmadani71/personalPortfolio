import React from "react";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "Python", value: 80 },
    { name: "JavaScript", value: 60 },
    { name: "React/NextJS", value: 70 },
    { name: "Django REST framework", value: 90 },
    { name: "Docker", value: 50 },
  ];

  return (
    <div className="mx-auto max-w-3xl w-full flex flex-col gap-6 px-4">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>{skill.name}</span>
            <span className="text-muted-foreground">{skill.value}%</span>
          </div>
          <Progress value={skill.value} className="h-2" />
        </div>
      ))}
    </div>
  );
};

export default Skills;
