import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  cardGroupVariants,
  Container,
  LeftSlideButton,
  RightSlideButton,
  Row,
  rowVariants,
  SlideCardGroup,
  Title,
} from "./PortfolioStyle.tsx";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { portfolios } from "../../data.ts";
import Modal from "./modal/Modal.tsx";

export default function Portfolio({
  setIsModalOpen,
}: {
  setIsModalOpen: (open: boolean) => void;
}) {
  const cardGroupControls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const [leaving, setLeaving] = useState(false);
  const [index, setIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [offset, setOffset] = useState(3);


  const toggleLeaving = () => setLeaving((prev) => !prev);

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth <= 768) {
        setOffset(1); // small일 땐 1개
      } else if (window.innerWidth <= 1024) {
        setOffset(2); // medium일 땐 2개
      } else {
        setOffset(3); // 기본값 3개
      }
    };

    updateOffset(); // 초기 설정
    window.addEventListener("resize", updateOffset);

    return () => {
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cardGroupControls.start("visible");
          } else {
            cardGroupControls.start("hidden");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [cardGroupControls]);

  const extendedPortfolios = [...portfolios, ...portfolios.slice(0, offset)];

  const increaseIndex = () => {
    if (!leaving) {
      toggleLeaving();
      setIndex((prev) => {
        const totalSlides = Math.ceil(portfolios.length / offset);
        return prev === totalSlides - 1 ? 0 : prev + 1;
      });
    }
  };
  
  const decreaseIndex = () => {
    if (!leaving) {
      toggleLeaving();
      setIndex((prev) => {
        const totalSlides = Math.ceil(portfolios.length / offset);
        return prev === 0 ? totalSlides - 1 : prev - 1;
      });
    }
  };
  

  const onCardClicked = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <Container ref={ref}>
      <Title>Projects</Title>
      <SlideCardGroup
        variants={cardGroupVariants}
        initial="hidden"
        animate={cardGroupControls}
      >
        <LeftSlideButton onClick={decreaseIndex}>
          <IoIosArrowBack size="60" />
        </LeftSlideButton>
        <RightSlideButton onClick={increaseIndex}>
          <IoIosArrowForward size="60" />
        </RightSlideButton>
        <AnimatePresence
          onExitComplete={toggleLeaving}
        >
          <Row
            as={motion.div}
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={`row-${index}`}
            transition={{ type: "tween", duration: 1 }}
          >
            {extendedPortfolios
              .slice(offset * index, offset * index + offset)
              .map((item) => (
                <Card
                  layoutId={`${item.id}`}
                  key={`${item.id}`}
                  whileHover="hover"
                  initial="normal"
                  // variants={cardVariants}
                  transition={{ type: "tween" }}
                  onClick={() => onCardClicked(item)}
                >
                  <span className="card-title">{item.title}</span>
                  <img className="img" src={item.img} alt="card-img" />
                  <div className="discription">
                    <span className="sub-title">{item.subTitle}</span>
                    <span className="skill">{item.skill}</span>
                    <span className="disc">{item.disc}</span>
                  </div>
                </Card>
              ))}
          </Row>
        </AnimatePresence>
      </SlideCardGroup>
      {selectedItem && <Modal item={selectedItem} onClose={closeModal} />}
    </Container>
  );
}
