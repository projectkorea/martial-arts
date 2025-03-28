import { MBTIType } from "@/types/mbti";

// 통계 데이터 인터페이스
export interface ResultStats {
  totalNumber: number;
  sameNumber: number;
}

// MBTI 결과 저장 API
export const saveMBTIResult = async (mbtiResult: string): Promise<{ redirectUrl: string }> => {
  const response = await fetch('/api/result', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      RESULT: mbtiResult,
      E: 0, I: 0, S: 0, N: 0, F: 0, T: 0, P: 0, J: 0 // 기존 서버 스택에 맞춘 형식
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to save MBTI result');
  }

  return response.json();
};

// MBTI 통계 데이터 가져오기 API
export const fetchMBTIStats = async (mbtiType: MBTIType | string): Promise<{ data: ResultStats }> => {
  const response = await fetch(`/api/result/${mbtiType}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch MBTI statistics');
  }

  return response.json();
}; 