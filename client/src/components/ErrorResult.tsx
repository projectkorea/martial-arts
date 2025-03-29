import Layout from './Layout';
import Button from './Button';

const ErrorResult = ({ onRestart }: { onRestart: () => void }) => (
  <Layout>
    <div className="container">
      <div className="error-message">
        <h2>잘못된 결과입니다.</h2>
        <Button onClick={onRestart}>처음으로</Button>
      </div>
    </div>
  </Layout>
);

export default ErrorResult; 