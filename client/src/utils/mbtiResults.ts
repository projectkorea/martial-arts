// MBTI 결과 타입 정의
export interface MBTIResult {
  title: string;              // 격투기 이름 (예: "태극권", "레슬링")
  mbti: string;               // MBTI 유형 (예: "ENFJ", "ESTJ")
  quote: string;              // 격투기 관련 짧은 인용구
  explanation: string[];      // 주요 설명 (리스트 형태)
  additionalInfo: string[];   // 추가 설명 (접었다 펼칠 수 있는 내용)
  imageUrl: string;           // 격투기 이미지 URL
  bestPartner: {              // 최고의 파트너 격투기
    type: string;             // 파트너 MBTI 유형
    title: string;            // 파트너 격투기 이름
    imageUrl: string;         // 파트너 이미지 URL
  };
  worstPartner: {             // 최악의 파트너 격투기
    type: string;             // 파트너 MBTI 유형
    title: string;            // 파트너 격투기 이름
    imageUrl: string;         // 파트너 이미지 URL
  };
  stats?: {                   // 선택적 통계 정보
    totalNumber: number;      // 전체 참여자 수
    sameNumber: number;       // 같은 유형의 참여자 수
  };
}

// MBTI 결과 데이터
export const mbtiResults: Record<string, MBTIResult> = {
  "ENFJ": {
    title: "태극권",
    mbti: "ENFJ",
    quote: "부드러움은 강함을 이기지요.",
    explanation: [
      "세계에서 가장 많은 수련생을 보유하고 있는 무술입니다.",
      "겉으론 부드러워 보이지만, 내면은 아주 단단한 '겉촉속바'같은 당신에게는 태극권이 가장 잘 어울립니다."
    ],
    additionalInfo: [
      "상대와 나를 연결하여 그 힘에 맞춥니다. 그리고 그 느낌대로, 나를 변화시키면서 상대를 압도합니다.",
      "상대에게 파고들어 공격과 방어하는 상황이 많습니다. 따라서 상대에게 밀착하는 능력이 가장 중요합니다.",
      "태극권의 신비주의적인 이미지 때문에 사기꾼들이 굉장히 많으니 조심하세요.",
      "유명인: 무우양, 양노선, 이연걸(태극장삼풍), 박해일(경주), 김하온(타이치 메디테이션)"
    ],
    imageUrl: "/images/taichi.jpg",
    bestPartner: {
      type: "INFP",
      title: "팔괘장",
      imageUrl: "/images/baguazhang.jpg"
    },
    worstPartner: {
      type: "ESTP",
      title: "종합격투기",
      imageUrl: "/images/mma.jpg"
    },
    stats: {
      totalNumber: 12543,
      sameNumber: 1684
    }
  },
  
  "ESTJ": {
    title: "레슬링",
    mbti: "ESTJ",
    quote: "잡히면, 죽는다.",
    explanation: [
      "MMA의 필수과목 중 가장 승률이 좋습니다.", 
      "원하는 상황을 순간적으로 강제할 수 있습니다. 강력한 클린치, 테이크 다운, 태클을 통해 우위를 점합니다."
    ],
    additionalInfo: [
      "레슬링은 상대의 타격기를 제압할때도 매우 효과적입니다. 레슬러가 태클이나 클린치로 붙어버리면 타격을 하는건 불가능에 가깝습니다.",
      "레슬링의 강력함을 인정한 미국을 비롯한 각국의 군과 경찰에서 범죄자 검거나 상대방 제압을 위한 훈련과목으로 채택하기도 합니다.",
      "굳은 의지, 확실한 질서 고집, 주변 상황을 정확히 판단하는 당신에게는 레슬리이 가장 잘 어울립니다. 레슬링을 통해 당신의 위풍당당한 지배력과 의지력을 표출해보세요.",
      "유명인: 심권호, 더 락, 언더테이커, 존 시나, 브록 레스너, 스티븐 오스틴, 빅쇼, 커트 앵글"
    ],
    imageUrl: "/images/wrestling.jpg",
    bestPartner: {
      type: "ISTP",
      title: "복싱",
      imageUrl: "/images/boxing.jpg"
    },
    worstPartner: {
      type: "ENFP",
      title: "카포에라",
      imageUrl: "/images/capoeira.jpg"
    },
    stats: {
      totalNumber: 12543,
      sameNumber: 1254
    }
  },

  // 여기에 나머지 14개 MBTI 유형에 대한 데이터를 추가할 수 있습니다.
  // 각 MBTI 유형별로 동일한 구조로 데이터를 구성합니다.
};

// 결과 페이지에서 사용할 통계 데이터 기본값
export const defaultStats = {
  totalNumber: 12543,
  sameNumber: 1254
};

// ID로 MBTI 유형 찾기 (1부터 시작)
export const getMBTITypeById = (id: string | undefined): string => {
  if (!id) return 'ENFJ';
  const index = parseInt(id) - 1;
  return Object.keys(mbtiResults)[index] || 'ENFJ';
};

// MBTI 유형으로 ID 찾기
export const getIdByMBTIType = (mbtiType: string): number => {
  const index = Object.keys(mbtiResults).indexOf(mbtiType);
  return index !== -1 ? index + 1 : 1;
}; 