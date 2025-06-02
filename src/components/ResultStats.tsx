const ResultStats = ({ typeCount, totalCount }: { typeCount: number; totalCount: number }) => {
  const percentage = totalCount > 0 ? (typeCount / totalCount * 100).toFixed(2) : '0.00';
  
  return (
    <div className="result-rank">
      전체 참여자 <div className="total-number result-rank-ment">{totalCount}</div> 명 중
      <br />
      나와 같은 격투가 유형은
      <br />
      <label className="percentage">{percentage}%</label> 입니다.
    </div>
  );
};

export default ResultStats; 