import React from "react";
import { Progress } from "@nextui-org/react";

const Skills = () => {
  return (
    <div className="mx-auto max-w-3xl w-full flex flex-col gap-4 px-4">
      <Progress
        className="max-w-2xl mx-auto"
        color="success"
        label="Python"
        value={80}
        maxValue={100}
        showValueLabel={true}
      />
      <Progress
        className="max-w-2xl mx-auto"
        color="success"
        label="JavaScript"
        value={60}
        maxValue={100}
        showValueLabel={true}
      />
      <Progress
        className="max-w-2xl mx-auto"
        color="success"
        label="React/NextJS"
        value={70}
        maxValue={100}
        showValueLabel={true}
      />
      <Progress
        className="max-w-2xl mx-auto"
        color="success"
        label="Django REST framework"
        value={90}
        maxValue={100}
        showValueLabel={true}
      />
    </div>
  );
};

export default Skills;
