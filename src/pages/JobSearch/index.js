import styled from 'styled-components';
import Container from '../../components/common/pageContainer';
import AppHeader from '../../components/AppHeader';
import AppSearchBar from '../../components/AppSearchBar';
import AppLocationFilter from '../../components/AppLocationFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobsAction, updateQueryParams } from '../../store/actions/jobs';
import CheckBox from '../../components/common/checkbox';
import AppJobList from '../../components/AppJobList';
import { useEffect } from 'react';

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    gap: 30px;
  }
`;

const FiltersDiv = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const JobSearchPage = (props) => {
  const dispatch = useDispatch();
  const jobs = useSelector((s) => s.jobs.jobs);
  const query = useSelector((s) => s.jobs.query);
  const loading = useSelector((s) => s.jobs.loading);

  const paramSetter = (property) => {
    return (value) => {
      dispatch(updateQueryParams({ ...query, page: 0, [property]: value }));
    };
  };

  const setFulltime = paramSetter('full_time');
  const setPage = paramSetter('page');

  const nextPage = () => {
    // there is a bug with the api, it returns the same data for either page 0 or 1
    const next = query.page === 0 ? 2 : query.page + 1;
    setPage(next);
  };

  const onCheckChange = (e) => setFulltime(e.target.checked);

  const onSearch = (e) => {
    e.preventDefault();
    const [input] = e.target.elements;
    const setProp = paramSetter(input.name);
    const txt = (input.value || '').trim();
    setProp(txt);
  };

  useEffect(() => {
    dispatch(fetchJobsAction(query, jobs));
  }, [query]);

  return (
    <Container>
      <AppHeader />
      <AppSearchBar defaultValue={query.description} name="description" onSearch={onSearch} />
      <SectionsContainer>
        <FiltersDiv>
          <div style={{ margin: '20px 0' }}>
            <CheckBox
              name="job_type"
              id="job_type"
              checked={query.full_time}
              onChange={onCheckChange}
            >
              Full Time
            </CheckBox>
          </div>
          <AppLocationFilter name="location" onSearch={onSearch} />
        </FiltersDiv>
        <AppJobList loading={loading} jobs={jobs} nextPage={nextPage} />
      </SectionsContainer>
    </Container>
  );
};

export default JobSearchPage;
