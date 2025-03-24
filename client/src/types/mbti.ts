export interface Trait {
  title: string;
  description: string;
}

export interface MBTIResult {
  title: string;
  description: string;
  traits: Trait[];
  imageUrl: string;
}

export const MBTI_RESULTS: Record<string, MBTIResult> = {
  ISTJ: {
    title: "청렴결백한 논리주의자",
    description: "한번 시작한 일은 끝까지 해내는 성실하고 믿음직한 현실주의자",
    traits: [
      {
        title: "성실함",
        description: "책임감이 강하고 한번 시작한 일은 끝까지 해내는 성격"
      },
      {
        title: "체계적",
        description: "계획을 세우고 그대로 실행하는 것을 좋아함"
      },
      {
        title: "신중함",
        description: "결정을 내리기 전에 충분한 시간을 가지고 고민함"
      },
      {
        title: "전통적",
        description: "검증된 방식을 선호하고 새로운 것보다 안정적인 것을 추구함"
      }
    ],
    imageUrl: "/images/result-ISTJ.jpg"
  },
  // ... 다른 MBTI 유형들도 같은 형식으로 추가
}; 