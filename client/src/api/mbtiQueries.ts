import { useMutation, useQuery } from '@tanstack/react-query';
import { saveMBTIResult, fetchMBTIStats } from './mbtiService';
import { MBTIType } from '@/types/mbti';

export const useSaveMBTIResult = () => {
  return useMutation({
    mutationFn: (mbtiType: string) => saveMBTIResult(mbtiType),
  });
};

export const useMBTIStats = (mbtiType: MBTIType | string | null | undefined, enabled = true) => {
  return useQuery({
    queryKey: ['mbtiStats', mbtiType],
    queryFn: () => fetchMBTIStats(mbtiType as string),
    enabled: !!mbtiType && enabled,
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 캐시
    select: (data) => data.data, // 데이터 변환
  });
}; 