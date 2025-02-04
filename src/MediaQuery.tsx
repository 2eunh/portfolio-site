import { css, type CSSObject, type Interpolation } from "styled-components";

export type Breakpoints =
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";

export const breakpoints: Record<Breakpoints, string> = {
  xsmall: `@media (max-width: 475px)`, // 작은 모바일 (아이폰SE 등)
  small: `@media (max-width: 640px)`,  // 일반 모바일 (갤럭시, 아이폰 일반 크기)
  medium: `@media (max-width: 768px)`, // 태블릿 (아이패드 미니)
  large: `@media (max-width: 1024px)`, // 작은 노트북
  xlarge: `@media (max-width: 1280px)`, // 데스크탑
  xxlarge: `@media (max-width: 1536px)`, // 큰 데스크탑
};

const media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<Object>[]
    ) => css`
      ${value} {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<Breakpoints, any>;

export default media;
