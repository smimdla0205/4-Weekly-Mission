declare module "*.svg" {
  const content: string;
  export default content;
}
/*declare module '*.svg': 이 구문은 모든 .svg 파일 확장자를 가진 파일에 대한 모듈 선언을 의미합니다. 즉, 프로젝트 내의 모든 .svg 파일이 이 선언에 의해 영향을 받는다는 것을 나타냅니다.

import React = require('react');: 이 구문은 CommonJS 모듈 형식을 사용하여 React를 import합니다. 이는 TypeScript 파일 내에서 React 타입 정의를 사용하기 위해 필요합니다.

const SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;: 이는 SVG를 React 함수 컴포넌트로 선언합니다. 이 컴포넌트는 SVGSVGElement에 대한 모든 속성을 받을 수 있는 props 타입 React.SVGProps<SVGSVGElement>을 가지게 됩니다.

export default SVG;: 이 구문은 앞서 선언된 SVG 컴포넌트를 기본으로 export합니다. 이를 통해 SVG 파일을 import할 때 해당 React 컴포넌트를 바로 사용할 수 있게 됩니다. */
