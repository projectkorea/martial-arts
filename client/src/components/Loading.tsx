import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007AFF;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loading = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loading; 