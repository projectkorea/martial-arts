import { useMutation, useQuery } from '@tanstack/react-query';
import { saveMBTIResult, fetchMBTIStats } from './mbtiService';
import { MBTIType } from '@/types/mbti';

// MBTI 결과 저장을 위한 mutation hook
export const useSaveMBTIResult = () => {
  return useMutation({
    mutationFn: (mbtiResult: string) => saveMBTIResult(mbtiResult),
  });
};

// MBTI 통계 데이터를 가져오기 위한 query hook
export const useMBTIStats = (mbtiType: MBTIType | string | null | undefined, enabled = true) => {
  return useQuery({
    queryKey: ['mbtiStats', mbtiType],
    queryFn: () => fetchMBTIStats(mbtiType as string),
    enabled: !!mbtiType && enabled,
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 캐시
    select: (data) => data.data, // 데이터 변환
  });
}; 