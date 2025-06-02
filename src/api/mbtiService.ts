import { MBTIType, MBTIScore } from '@/types/mbti';

export interface ResultStats {
  typeCount: number;
  totalCount: number;
}

export const saveMBTIResult = async (mbtiType: string, score: MBTIScore): Promise<{ redirectUrl: string }> => {
  const response = await fetch('/api/mbti/result', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      mbtiType,
      ...score
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