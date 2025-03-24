import styled from '@emotion/styled';
import { ReactNode } from 'react';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  font-size: 14px;
  color: #666;
`;

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

const Layout = ({ children, showFooter = true }: LayoutProps) => {
  return (
    <Container>
      <Main>{children}</Main>
      {showFooter && (
        <Footer>
          <p>© 2024 Martial Arts Test. All rights reserved.</p>
        </Footer>
      )}
    </Container>
  );
};

export default Layout; 