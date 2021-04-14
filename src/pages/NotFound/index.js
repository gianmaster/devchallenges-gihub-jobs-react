import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../../components/common/pageContainer';

const NotFoundDiv = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 46px;
  flex-direction: column;
`;

const Span = styled.span`
  font-weight: bold;
`;

const NotFoundPage = () => {
  return (
    <Container>
      <NotFoundDiv>
        <p>
          404 Page <Span>Not</Span> Found
        </p>
        <hr />
        <Link to="/" style={{ fontSize: '12px' }}>
          Go Home
        </Link>
      </NotFoundDiv>
    </Container>
  );
};

export default NotFoundPage;
