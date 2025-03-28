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
  title: string;
  mbti: MBTIType;
  quote: string;
  imageUrl: string;
  explanation: string[];
  additionalInfo: string[];
  bestPartner: Partner;
  worstPartner: Partner;
  stats?: {
    totalNumber: number;
    sameNumber: number;
  };
}

export interface Partner {
  type: MBTIType;
  title: string;
  imageUrl: string;
}
