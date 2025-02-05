import React, { useEffect, useRef, useState } from "react";
import { SkillContainer, SkillContents,  SkillPercentage,  SkillTitle, SkillUtilization, StyledSkillItem } from "./SkillStyle.tsx";
import {  skills1, skills2 } from "../../data.ts";
import { useInView } from "framer-motion";


export default function Skill() {
  const [selectedSkill, setSelectedSkill] = useState("info");

  const handleSkillClick = (skillName: string) => {
    setSelectedSkill(skillName);
  };



  return (
    <SkillContainer >
      <SkillTitle>Skill</SkillTitle>
      <SkillContents>
        <div>
          {skills1.map((skill) => (
            <SkillItem
              key={skill.name}
              skill={skill}
              onClick={() => handleSkillClick(skill.name)}
              isActive={selectedSkill === skill.name}
            />
          ))}
        </div>
        <div>
          {skills2.map((skill) => (
            <SkillItem
              key={skill.name}
              skill={skill}
              onClick={() => handleSkillClick(skill.name)}
              isActive={selectedSkill === skill.name}
            />
          ))}
        </div>
      </SkillContents>
      <SkillUtilization>
        {selectedSkill === "info" && (
          <div className="info">아이콘을 클릭해보세요!</div>
        )}
        {selectedSkill === "React" && (
          <div className="react">
            <ul>
              <li>리액트 훅을 활용하여 상태 관리와 사이드 이펙트를 효율적으로 처리할 수 있습니다.</li>
              <li>리액트의 구조와 문법을 숙지하고, 컴포넌트 기반 개발을 구현할 수 있습니다.</li>
              <li>리액트의 스타일링 방법에 익숙하며, styled-components나 CSS-in-JS와 같은 방식으로 스타일을 효율적으로 관리할 수 있습니다.</li>
              <li>React Router를 활용한 효율적인 라우팅 관리와 페이지 간 전환을 원활하게 구현할 수 있습니다.</li>
            </ul>
          </div>
        )}
        {selectedSkill === "Angular" && (
          <div className="angular">
            <ul>
              <li>앵귤러의 컴포넌트 기반 아키텍처를 잘 이해하고, 재사용 가능한 컴포넌트를 설계하여 유지보수성과 코드 재사용성을 높일 수 있습니다.</li>
              <li>양방향 데이터 바인딩을 활용해 모델과 UI 간의 동기화를 효율적으로 처리할 수 있습니다.</li>
              <li>RxJS를 활용하여 비동기 작업과 데이터 흐름을 관리할 수 있습니다.</li>
              <li>앵귤러 폼과 유효성 검사 기능을 통해 효율적인 폼 관리를 할 수 있습니다.</li>
            </ul>
          </div>
        )}
        {selectedSkill === "JavaScript" && (
          <div className="javascript">
            <ul>
              <li>자바스크립트의 기본 문법과 구조를 숙지하고, 동적 웹 페이지 기능을 구현할 수 있습니다.</li>
              <li>변수, 조건문, 반복문 등을 활용해 논리적인 흐름을 구성하고 문제를 해결할 수 있습니다.</li>
              <li>배열과 객체를 활용하여 데이터를 효과적으로 처리하고 관리할 수 있습니다.</li>
            </ul>
          </div>
        )}
        {selectedSkill === "TypeScript" && (
          <div className="typescript">
            <ul>
              <li>타입스크립트의 기본 문법과 타입 시스템을 이해하고, 변수에 명시적 타입을 지정하여 코드 안정성을 높일 수 있습니다.</li>
              <li>기본적인 인터페이스와 타입을 사용하여 코드의 가독성 및 유지보수성을 향상시킬 수 있습니다.</li>
              <li>클래스와 객체 지향 프로그래밍(OOP) 개념을 적용하여 더 구조적이고 명확한 코드를 작성할 수 있습니다.</li>
              <li>타입스크립트를 활용한 ES6+ 문법을 익히고, 더 안정적인 코드를 작성할 수 있습니다.</li>
            </ul>
          </div>
        )}
        {selectedSkill === "CSS" && (
          <div className="css">
            <ul>
              <li>CSS 문법을 이해하고 스타일을 적용하며, 간단한 애니메이션과 트랜지션을 구현할 수 있습니다.</li>
              <li>SCSS와 SASS를 사용하여 변수, 믹스인, 중첩 규칙 등을 활용해 효율적이고 유지보수하기 쉬운 스타일을 작성할 수 있습니다.</li>
              <li>미디어 쿼리와 Flexbox, Grid를 활용하여 반응형 디자인을 구현할 수 있습니다.</li>
            </ul>
          </div>
        )}
        {selectedSkill === "HTML" && (
          <div className="html">
            <ul>
              <li>HTML5의 기본 구조와 시맨틱 요소를 활용해 웹 페이지를 효과적으로 구성할 수 있습니다.</li>
              <li>폼, 미디어, 링크, 리스트 등 다양한 HTML 요소를 사용하여 사용자 인터페이스를 구축할 수 있습니다.</li>
              <li>웹 접근성을 고려해 aria 태그와 alt 속성을 적절히 사용하여 사용자 경험을 향상시킬 수 있습니다.</li>
            </ul>
          </div>
        )}
        {selectedSkill === "JAVA" && (
          <div className="java">
            <ul>
              <li>자바의 기본 문법과 객체 지향 개념을 이해합니다.</li>
              <li>Spring을 사용해 기본적인 REST API를 만들고, 데이터를 처리하는 작업을 할 수 있습니다.</li>
            </ul>
          </div>
        )}
        {selectedSkill === "Figma" && (
          <div className="figma">
            <ul>
              <li>Figma를 사용해 간단한 웹 페이지와 UI 디자인을 만들 수 있습니다.</li>
              <li>기본적인 레이아웃과 컴포넌트 설계를 하고, 프로토타입을 만들어 사용자 흐름을 시각화할 수 있습니다.</li>
              <li>협업 기능을 활용해 팀원과 디자인을 공유하고 피드백을 받을 수 있습니다.</li>
            </ul>
          </div>
        )}
      </SkillUtilization>
    </SkillContainer>
  );
}

function SkillItem({ skill, onClick, isActive }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <StyledSkillItem ref={ref} onClick={onClick}>
      <div className={`flip-container ${isActive ? "flipped" : ""}`}>
        <div className="flipper">
          <div className="front">
            <img src={process.env.PUBLIC_URL + `${skill.img}`} alt="skill-img" className="skill-img" />
          </div>
          <div className="back">
            <span className="skill-name">{skill.name}</span>
          </div>
        </div>
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