import { MBTIResult } from '@/types/mbti';

const ResultHeader = ({ result }: { result: MBTIResult }) => (
  <div className="result-top wrapper-top">
    <div className="result char_result">
      <div className="result-text-white">나랑 가장 잘 맞는 격투기 종목은</div>
      <div className="result-title animate__animated animate__pulse">{result.title}</div>
      <div className="result-sub-title animate__animated animate__pulse">{result.mbti}</div>
      <img className="result-img" src={result.imageUrl} alt={result.title} />
      <div className="result-subtitle">
        <div className="icon-quote">
          <i className="fas fa-quote-left icon-left"></i>
          <i className="fas fa-quote-right icon-right"></i>
        </div>
        <div className="result-quote">{result.quote}</div>
      </div>
    </div>
  </div>
);

export default ResultHeader; 