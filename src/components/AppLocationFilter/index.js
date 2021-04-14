import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateQueryParams } from '../../store/actions/jobs';
import Radio from '../basis/radio';
import { colors, fontSize } from '../basis/style-guide';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LocationLabel = styled.span`
  color: ${colors.gray};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${fontSize.text};
`;

const SearchForm = styled.form`
  margin: 0;
  padding: 0;
  position: relative;
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
  text-indent: 52px;
  color: #909192;

  ::placeholder {
    color: ${colors.light};
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 35%;
  left: 22px;
  color: ${colors.gray};
  font-size: ${fontSize.contentText};
`;

const CloseIcon = styled.span`
  position: absolute;
  top: 35%;
  right: 22px;
  color: ${colors.light};
  font-size: ${fontSize.contentText};
  cursor: pointer;
  border-radius: 25px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
`;

const LocationInputSearch = ({ onSearch, ...props }) => {
  const form = useRef(null);
  const query = useSelector((s) => s.jobs.query);
  const dispatch = useDispatch();

  const clearText = (e) => {
    form.current.reset();
    dispatch(updateQueryParams({ ...query, location: '' }));
  };

  useEffect(() => {
    if (form) {
      form.current.querySelector('input').value = query.location;
    }
  }, [query.location]);

  return (
    <SearchForm onSubmit={onSearch} ref={form}>
      <Icon className="material-icons">public</Icon>
      <SearchInput
        type="text"
        name="location_search"
        id="location_search"
        placeholder="City, state, zip code or country"
        {...props}
      />
      {query.location && (
        <CloseIcon className="material-icons" onClick={clearText}>
          close
        </CloseIcon>
      )}
    </SearchForm>
  );
};

const DefaultOptions = (props) => (
  <div style={{ margin: '25px 0' }}>
    <Radio options={['London', 'Amsterdam', 'New York', 'Berlin']} {...props} />
  </div>
);

const AppLocationFilter = ({ onSearch, ...props }) => {
  const query = useSelector((s) => s.jobs.query);
  const text = query.location;
  const dispatch = useDispatch();

  const onRadioButtonChange = (e) => {
    const txt = e.target.value;
    dispatch(updateQueryParams({ ...query, location: txt }));
  };

  return (
    <Container>
      <LocationLabel>LOCATION</LocationLabel>
      <hr />
      <LocationInputSearch onSearch={onSearch} {...props} />
      <DefaultOptions currentValue={text} onChange={onRadioButtonChange} />
    </Container>
  );
};

export default AppLocationFilter;
