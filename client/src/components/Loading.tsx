import styled from '@emotion/styled';

const LoadingPage = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1000;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Circ = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
`;

const Hands = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border: 8px solid #333;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Body = styled.div`
  position: absolute;
  width: 40px;
  height: 60px;
  background-color: #333;
  border-radius: 20px;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Head = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #333;
  border-radius: 50%;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Eye = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
`;

const Loading = () => {
  return (
    <LoadingPage className="loading-page wrapper-loading">
      <Circ className="circ">
        <Hands className="hands" />
        <Body className="body" />
        <Head className="head1">
          <Eye className="eye" />
        </Head>
      </Circ>
      <LoadingTitle className="loading-title">전투력 측정중..</LoadingTitle>
    </LoadingPage>
  );
};

export default Loading; 