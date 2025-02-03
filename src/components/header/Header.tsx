import React, { useState } from "react";
import {
  MotionDot,
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  Menu,
  Nav,
} from "./HeaderStyle.tsx";

interface HeaderProps {
  scrollToSection: (index: number) => void;
  activeIndex: any;
}

export default function Header({ scrollToSection, activeIndex }: HeaderProps) {

  const menuItems = ["Intro", "About", "Projects", "Skill"];

  return (
    <HeaderContainer>
      <Nav>
        <HeaderItems>
          {menuItems.map((item, index) => (
            <HeaderItem
              key={index}
              onClick={() => scrollToSection(index)}
            >
              {activeIndex === index && (
                <MotionDot
                  layoutId="active-dot"
                  initial={false}
                  transition={{
                    type: "spring",
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
