export const portfolios = [
  {
    id: 1,
    title: "Portfolio Site",
    subTitle: "Portfolio Site (포트폴리오 사이트)",
    img: "./img/portfolio_site_main.png",
    skill: "React, TypeScript, HTML, framer-motion, Styled-components",
    disc: "본인을 소개하고, 보유한 스킬과 프로젝트 경험을 소개하는 포트폴리오 사이트입니다.",
    detail: {
      gitHub: "https://github.com/2eunh/portfolio-site",
      site: "https://2eunh.github.io/portfolio-site",
      outline: {
        project: "포트폴리오 사이트 (반응형 웹)",
        developers: "1명",
        //기간
        period: "2025.01.20 ~ 2025.01.31.",
      },
      devDetail: [
        {
          subTitle: "화면 설계 및 퍼블리싱",
          subContents: [
            "화면 디자인, 설계 및 퍼블리싱",
            "styled-component, Scss 및 framer-motion을 사용하여 동적 애니메이션 구현",
            "반응형 웹으로 구현하여 다양한 디바이스 지원"
          ],
        }
      ],
    },
    review:
      "성과: CSS와 Framer Motion을 활용하여 동적 애니메이션을 구현하며, 사용자 경험을 향상시키는 인터랙티브한 UI 요소를 개발했습니다. 이를 통해 CSS 애니메이션의 기초를 다시 다지는 동시에, 자연스럽고 부드러운 전환 효과를 적용하는 방법을 익혔습니다.",
    review2:
      "향후 계획: 프로젝트 내용을 추가하고 업데이트 할 예정이며, 좀 더 자연스럽고 인터렉티브한 애니메이션 효과와 디자인 적용을 목표로 하고 있습니다.",
  },
  {
    id: 2,
    title: "Cucucook",
    subTitle: "Cucucook (요리 레시피 플랫폼)",
    img: "./img/cucucook-main.png",
    skill: "React, TypeScript, HTML, Styled-components",
    disc: "cucucook은 다양한 요리 레시피를 공유하고 소통할 수 있는 플랫폼입니다. 사용자는 자신만의 레시피를 등록하고 다른 사용자들의 레시피를 탐색할 수 있습니다. 또한, 댓글과 좋아요 기능을 통해 상호 작용할 수 있습니다.",
    detail: {
      gitHub: "https://github.com/dev-jieun-lee/cucucook_react",
      site: "https://cucucook.site",
      siteLoginInfo:
        "테스트 아이디 (관리자) : user01 ,비밀번호 :1111 / (유저) : user03 ,비밀번호 :1111",
      outline: {
        project: "요리 레시피 플렛폼 (반응형 웹)",
        developers: "3명",
        //기간
        period: "2024.07.27 ~ 2024.10.16.",
        //개발환경
        devEnvironment: {
          fe: "Recat, TypeScript, Styled-component",
          be: "Java, Spring boot, PostgreSQL",
        },
      },
      devDetail: [
        {
          subTitle: "화면 설계 및 프론트엔드 개발",
          subContents: [
            "전반적인 화면 퍼블리싱과 기능 구현.",
            "Context API 및 로컬 스토리지를 활용하여 다크/라이트 모드 전환, 언어 번역, 로그인 상태 관리 구현.",
            "styled-component 및 MUI를 활용하여 재사용 가능한 UI 컴포넌트 설계",
            "반응형 웹으로 구현하여 다양한 디바이스 지원"
          ],
        },
        {
          subTitle: "백엔드 REST API 개발",
          subContents: [
            "공지사항, FAQ, 질의응답 게시판 API 설계 및 구현",
            "게시글 CRUD, 페이징, 검색, 이미지 업로드 및 파일 첨부 기능 개발",
          ],
        },
        {
          subTitle: "기타",
          subContents: [
            "권한에 따른 라우팅 및 API 접근 제한 구현 (라우트 가드)",
            "로고 제작 및 UI 설계, 스토리보드 및 ERD 작성",
          ],
        },
      ],
    },
    review:
      "성과: React를 활용한 전반적인 화면 개발과 상태 관리 기능 등을 구현하며 React와 프론트엔드 개발 역량을 강화했습니다. 또한, RESTful API 설계·구현을 통해 백엔드 구조와 데이터 흐름에 대한 이해를 높였습니다. 협업 과정에서 의견 조율과 책임감을 통해 프로젝트를 완성하며 팀워크 능력을 키웠고, 코드 품질 향상을 위해 코딩 컨벤션과 효율적인 폴더 구조의 중요성을 배우는 계기가 되었습니다.",
    review2:
      "향후 계획: 부족한 부분들을 개선하고, 지속적으로 리팩토링하며, Next.js로의 마이그레이션과 SSR 도입을 통해 성능 최적화를 목표로 하고 있습니다.",
  },
  {
    id: 3,
    title: "Netflix clone",
    subTitle: "mini Netflix clone (넷플릭스 메인 클론코딩)",
    img: "./img/netflix_clone_main.png",
    skill: "React, TypeScript, HTML, Styled-components, framer-motion",
    disc: "react와 framer-motion을 공부하고 익히며 넷플릭스 첫 화면을 클론 코딩한 프로젝트입니다. ",
    detail: {
      gitHub: "https://github.com/2eunh/Mini_NETFLIX_clone",
      outline: {
        project: "넷플릭스 첫 화면 클론 코딩",
        developers: "1명",
        //기간
        period: "2024.05.28 ~ 2024.06.12.",
      },
      devDetail: [
        {
          subTitle: "퍼블리싱 및 프론트엔드 개발",
          subContents: [
            "themoviedb의 openAPI를 사용하여 데이터 연동",
            "styled-component, Scss 및 framer-motion을 사용하여 동적 애니메이션 구현",
            "유튜브 API를 연동하여 데이터 클리시 유튜브가 자동 재생되도록 구현"
          ],
        }
      ],
    },
    review:
      "성과: 노마드코더의 넷플릭스 클론 코딩 강의를 수강하며, React와 Framer Motion을 활용한 동적 UI 구현 방법을 익혔습니다. 수업 내용을 넘어, 유튜브 API를 연동하여 실제 넷플릭스와 유사한 인터페이스를 구현했으며, 이를 통해 API 연동, 데이터 처리 및 동적 콘텐츠 로딩에 대한 실무 경험을 쌓았습니다.",
  },
  {
    id: 4,
    title: "To do list",
    subTitle: "To do list (할일 목록 게시판)",
    img: "./img/to_do_list_main.png",
    skill: "React, TypeScript, HTML, Styled-components",
    disc: "트렐로 형식으로 구현한 할일 목록 게시판입니다. 드래그앤드롭을 통해 할일을 추가하거나, 옮기거나, 삭제할 수 있습니다.",
    detail: {
      gitHub: "https://github.com/2eunh/to_do_list",
      outline: {
        project: "트렐로 형식의 투두리스트 게시판",
        developers: "1명",
        //기간
        period: "2024.04.20 ~ 2024.05.12.",
      },
      devDetail: [
        {
          subTitle: "퍼블리싱 및 프론트엔드 개발",
          subContents: [
            "recoil, recoil-persist 사용하여 전역 상태관리 구현",
            "styled-component, Scss 및 react-beautiful-dnd을 사용한 드래그앤드롭 구현",
            "react-hook-form 사용하여 form만들고 유효성 검사 추가"
          ],
        }
      ],
    },
    review:
      "성과: React의 기초를 다지기 위한 첫 프로젝트로, React의 동작 방식과 원리에 대해 심층적으로 학습할 수 있었습니다. 이를 통해 컴포넌트 기반 아키텍처, 리액트 훅, 상태 관리 등 React의 핵심 개념을 이해하고, 실제 프로젝트에서 적용하는 경험을 쌓았습니다.",
  },
];

export const skills1 = [
  {
    name: "React",
    img: "./img/skill/React.svg",
    percentage: "60%",
  },
  {
    name: "Angular",
    img: "./img/skill/Angular-Light.svg",
    percentage: "60%",
  },
  {
    name: "JavaScript",
    img: "./img/skill/JavaScript.svg",
    percentage: "60%",
  },
  {
    name: "TypeScript",
    img: "./img/skill/TypeScript.svg",
    percentage: "60%",
  },
];
export const skills2 = [
  {
    name: "JAVA",
    img: "./img/skill/Java-Dark.svg",
    percentage: "30%",
  },
  {
    name: "CSS",
    img: "./img/skill/CSS.svg",
    percentage: "70%",
  },
  {
    name: "HTML",
    img: "./img/skill/HTML.svg",
    percentage: "70%",
  },
  {
    name: "Figma",
    img: "./img/skill/Figma.svg",
    percentage: "50%",
  },
];
