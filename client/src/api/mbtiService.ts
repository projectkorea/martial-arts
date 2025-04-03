import { MBTIType } from "@/types/mbti";

export interface ResultStats {
  totalNumber: number;
  sameNumber: number;
}

export const saveMBTIResult = async (mbtiType: string): Promise<{ redirectUrl: string }> => {
  const response = await fetch('/api/mbti/result', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      mbtiType,
      E: 0, I: 0, S: 0, N: 0, F: 0, T: 0, P: 0, J: 0
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to save MBTI result');
  }

  return response.json();
};

export const fetchMBTIStats = async (mbtiType: MBTIType | string): Promise<{ data: ResultStats }> => {
  const response = await fetch(`/api/mbti/result/${mbtiType}`, {
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