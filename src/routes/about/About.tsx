import React, { useEffect, useRef } from "react";
import { Container, Contents, Title } from "./AboutStyle.tsx";
import { useAnimation } from "framer-motion";

export default function About() {
  const titleControls = useAnimation();
  const contentControls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleControls.start("visible");
            contentControls.start("visible");
          } else {
            titleControls.start("hidden");
            contentControls.start("hidden");
          }
        });
      },
      { threshold: 0.5 } // 50% 이상 보일 때 작동
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [titleControls, contentControls]);

  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  const contentVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <Container ref={ref}>
      <Title>About Me</Title>
      <Contents>

      </Contents>
    </Container>
  );
}