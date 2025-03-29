import { useState } from 'react';

const ExplanationSection = ({ 
  explanation, 
  additionalInfo 
}: { 
  explanation: string[];
  additionalInfo: string[];
}) => {
  const [isContentOpen, setIsContentOpen] = useState(false);
  
  const toggleContent = () => setIsContentOpen(!isContentOpen);
  
  return (
    <div className="result-explannation result-text-left wrapper-explanation">
      <ul>
        {explanation.map((item, index) => (
          <li key={index}>
            <i className="fas fa-fist-raised"></i>
            {item}
          </li>
        ))}
      </ul>

      <div className="folder">
        {!isContentOpen ? (
          <button className="folder-button" onClick={toggleContent}>
            <i className="fas fa-arrow-down"></i>
            설명 더 보기
          </button>
        ) : null}
        <div className="folder-content" style={{ display: isContentOpen ? 'block' : 'none' }}>
          <ul>
            {additionalInfo.map((item, index) => (
              <li key={index}>
                <i className="fas fa-fist-raised"></i>
                {item}
              </li>
            ))}
          </ul>
          <div className="folder-footer">
            <button className="folder-button-down" onClick={toggleContent}>
              <i className="fas fa-arrow-up"></i>
              접기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplanationSection; 