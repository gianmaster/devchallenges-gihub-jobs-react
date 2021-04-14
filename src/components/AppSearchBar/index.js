import styled from 'styled-components';
import { colors, font, fontSize } from '../common/style-guide';
const SearchBarContainer = styled.div`
  width: 100%;
  height: 140px;
  background: url(backgroundImg.png) no-repeat center center local;
  background-size: cover;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SearchForm = styled.form`
  margin: 0;
  padding: 0;
  position: relative;
  width: calc(100% - 36px);

  @media (min-width: 480px) {
    width: calc(100% - 160px);
  }

  @media (min-width: 1024px) {
    width: calc(100% - 400px);
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 4px;
  background: white;
  height: 56px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border: none;
  font-size: ${fontSize.smallText};
  outline: none;
  border-spacing: 10px;
  text-indent: 42px;
  color: #909192;

  ::placeholder {
    color: ${colors.light};
  }
`;

const SearchButton = styled.button`
  width: 104px;
  height: 48px;
  color: white;
  font-size: ${fontSize.contentText};
  font-family: ${font.main};
  border-radius: 4px;
  position: absolute;
  top: 4px;
  right: 4px;
  background-color: ${colors.primary};
  border: none;
  outline: none;

  :hover {
    filter: opacity(0.9);
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 35%;
  left: 22px;
  color: ${colors.gray};
  font-size: ${fontSize.contentText};
`;

const AppSearchBar = ({ onSearch, ...props }) => {
  return (
    <SearchBarContainer>
      <SearchForm onSubmit={onSearch}>
        <Icon className="material-icons">work_outline</Icon>
        <SearchInput {...props} placeholder="Title, Companies, Experience..." />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </SearchBarContainer>
  );
};

export default AppSearchBar;
