import React, { useRef } from "react";
import { SkillContainer, SkillContents,  SkillPercentage,  SkillTitle, StyledSkillItem } from "./SkillStyle.tsx";
import {  skills1, skills2 } from "../../data.ts";
import { useInView } from "framer-motion";


export default function Skill() {
  return (
    <SkillContainer>
      <SkillTitle>Skill</SkillTitle>
      <SkillContents>
        <div>
          {skills1.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
        <div>
          {skills2.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </SkillContents>
    </SkillContainer>
  );
}

function SkillItem({ skill }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <StyledSkillItem ref={ref}>
      <div className="flip-container">
        <img src={skill.img} alt="skill-img" className="skill-img" />
        <span className="skill-name">{skill.name}</span>
      </div>
      <div className="skill-percentage-wrapper">
        <SkillPercentage
          className="skill-percentage"
          initial={{ width: "0%" }}
          animate={{ width: isInView ? `${skill.percentage}` : "0%" }}
        />
      </div>
    </StyledSkillItem>
  );
}