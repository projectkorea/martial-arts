import { Document } from 'mongoose';
import { Request } from 'express';

/**
 * MBTI 성격 특성 속성 - models와 controllers에서 공통으로 사용
 */
export interface PersonalityProps {
  E: number;
  I: number;
  S: number;
  N: number;
  F: number;
  T: number;
  P: number;
  J: number;
}

/**
 * 모델 인터페이스 - model과 controller에서 공통으로 사용
 */
export interface IMartialArtsResult extends Document {
  prop: PersonalityProps;
  mbtiType: string;
}

/**
 * Express 요청 타입 헬퍼 - 컨트롤러에서 사용
 */
export type TypedRequestBody<T> = Request<{}, {}, T>;
export type TypedRequestParams<T> = Request<T>; 