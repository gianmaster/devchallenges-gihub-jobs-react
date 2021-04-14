import styled from 'styled-components';
import { colors } from '../style-guide';

const Container = styled.div`
  padding: 12px;
  background-color: ${colors.white};
  min-height: 100vh;
  min-width: 320px;
`;

const Footer = styled.footer`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.gray};
`;

const PageContainer = ({ children }) => {
  return (
    <Container>
      {children}
      <Footer>
        <p>
          created by <strong>Giancarlos Cercado</strong> - devChallenges.io
        </p>
      </Footer>
    </Container>
  );
};

export default PageContainer;
