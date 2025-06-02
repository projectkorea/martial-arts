import { Link } from 'react-router-dom';

type Partner = {
  type: string;
  title: string;
  imageUrl: string;
};

const PartnerSection = ({ bestPartner, worstPartner }: { 
  bestPartner: Partner;
  worstPartner: Partner;
}) => (
  <div className="result-bottom partner-wrapper wrapper">
    <Link className="best-partner" to={`/result/${bestPartner.type}`}>
      <div>
        <div className="result-text-black-best">최고의 파트너</div>
        <div className="result-char-wrapper">
          <div className="result-title-black">{bestPartner.title}</div>
          <br />
          <img className="result-partner-img" src={bestPartner.imageUrl} alt={bestPartner.title} />
        </div>
      </div>
    </Link>
    <Link className="worst-partner" to={`/result/${worstPartner.type}`}>
      <div>
        <div className="result-text-black-worst">최악의 파트너</div>
        <div className="result-char-wrapper">
          <div className="result-title-black">{worstPartner.title}</div>
          <br />
          <img className="result-partner-img" src={worstPartner.imageUrl} alt={worstPartner.title} />
        </div>
      </div>
    </Link>
  </div>
);

export default PartnerSection; 