import styled from 'styled-components';
import AppLogo from '../AppLogo';

const HeaderContainer = styled.div`
  padding-bottom: 32px;
`;

export default function AppHeader() {
  return (
    <HeaderContainer>
      <AppLogo />
    </HeaderContainer>
  );
}
