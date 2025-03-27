interface Trait {
  title: string;
  description: string;
}

interface ResultCardProps {
  title: string;
  description: string;
  traits: Trait[];
}

const ResultCard = ({ title, description, traits }: ResultCardProps) => {
  return (
    <div className="result-card-container">
      <h1 className="result-card-title">{title}</h1>
      <p className="result-card-description">{description}</p>
      <div className="result-card-traits-container">
        {traits.map((trait, index) => (
          <div key={index} className="result-card-trait-item">
            <h3 className="result-card-trait-title">{trait.title}</h3>
            <p className="result-card-trait-description">{trait.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultCard; 