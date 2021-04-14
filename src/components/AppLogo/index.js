import styled from 'styled-components';
import { colors, fontSize, font } from '../common/style-guide';

const LogoContainer = styled.div`
  display: inline;
  margin: 0;
  padding: 0;
  font-family: ${font.secondary};
  font-size: ${fontSize.header};
  background-color: ${colors.white};
  height: 100vh;
  min-width: 320px;
  color: ${colors.dark};
`;

const LeftWord = styled.span`
  font-weight: bold;
  padding-right: 3px;
`;

const AppLogo = () => {
  return (
    <LogoContainer>
      <LeftWord>Github</LeftWord>
      <span>Jobs</span>
    </LogoContainer>
  );
};

export default AppLogo;
