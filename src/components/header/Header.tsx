import React, { useState } from "react";
import {
  MotionDot,
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  Menu,
  Nav,
} from "./HeaderStyle.tsx";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = ['Intro', 'About', 'Projects', 'Skill'];

  return (
    <HeaderContainer>
      <Nav>
        <HeaderItems>
          {menuItems.map((item, index) => (
            <HeaderItem key={index} onClick={() => setActiveIndex(index)}>
              {activeIndex === index && (
                <MotionDot
                  layoutId="active-dot"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
              <Menu>{item}</Menu>
            </HeaderItem>
          ))}
        </HeaderItems>
      </Nav>
    </HeaderContainer>
  );
}
