export type MBTIType = 'INFP' | 'ENFP' | 'INFJ' | 'ENFJ' | 'INTJ' | 'ENTJ' | 'INTP' | 'ENTP' | 
                      'ISFP' | 'ESFP' | 'ISFJ' | 'ESFJ' | 'ISTJ' | 'ESTJ' | 'ISTP' | 'ESTP';

export interface MBTIScore {
  E: number;
  I: number;
  S: number;
  N: number;
  F: number;
  T: number;
  P: number;
  J: number;
}

export interface MBTIResult {
  title: string;              // 격투기 이름 (예: "태극권", "레슬링")
  mbti: MBTIType;             // MBTI 유형 (예: "ENFJ", "ESTJ")
  quote: string;              // 격투기 관련 짧은 인용구
  imageUrl: string;           // 격투기 이미지 URL
  explanation: string[];      // 주요 설명 (리스트 형태)
  additionalInfo: string[];   // 추가 설명 (접었다 펼칠 수 있는 내용)
  bestPartner: Partner;       // 최고의 파트너 격투기
  worstPartner: Partner;      // 최악의 파트너 격투기
  stats?: {
    totalNumber: number;
    sameNumber: number;
  };
}

export interface Partner {
  type: MBTIType;             // 파트너 MBTI 유형
  title: string;              // 파트너 격투기 이름
  imageUrl: string;           // 파트너 이미지 URL
}
