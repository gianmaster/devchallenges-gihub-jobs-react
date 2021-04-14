import AppJobListItem from './AppJobListItem';
import styled from 'styled-components';
import Loading from '../basis/loading';
import { colors } from '../basis/style-guide';

const ListContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 20px;
  max-height: 100vh;
  overflow: auto;
`;

const LoadMoreDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    height: 30px;
    width: 200px;
    background-color: ${colors.primary};
    color: ${colors.white};
    border-radius: 4px;
    border: none;
    cursor: pointer;

    :focus {
      outline: none;
    }
  }
`;

const AppJobList = ({ jobs, loading, nextPage }) => {
  const hasMoreRecords = jobs.length > 0 && jobs.length % 50 === 0;
  return (
    <ListContainer>
      {loading ? (
        <Loading />
      ) : (
        jobs
          .sort((a, b) => {
            const at = new Date(a.created_at).getTime();
            const bt = new Date(b.created_at).getTime();
            return bt - at;
          })
          .map((job, idx) => {
            return <AppJobListItem key={idx} {...job} />;
          })
      )}
      {!loading && hasMoreRecords && (
        <LoadMoreDiv>
          <button onClick={nextPage}>Load more</button>
        </LoadMoreDiv>
      )}
    </ListContainer>
  );
};

export default AppJobList;
