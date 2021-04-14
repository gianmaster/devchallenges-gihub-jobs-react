import styled from 'styled-components';
import Container from '../../components/basis/pageContainer';
import AppHeader from '../../components/AppHeader';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { colors, font, fontSize } from '../../components/basis/style-guide';
import { findJobById } from '../../services/githubApi';
import { useState } from 'react';
import Loading from '../../components/basis/loading';
import { timeFrom } from '../../utils/helpers';

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.secondary};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    gap: 30px;
  }
`;

const HowToApplySection = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const HowToApplyTitle = styled.span`
  color: ${colors.gray};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${fontSize.text};
`;

const HowToApplyContent = styled.div`
  margin: 16px 0 36px;

  * {
    font-size: ${fontSize.text};
    font-weight: 500;
  }

  a {
    color: ${colors.primary};
    text-decoration: none;
    overflow-wrap: anywhere;
  }
`;

const LinkContainer = styled.div`
  margin: 0 0 40px;
  font-family: ${font.secondary};
  font-weight: 500;
`;

const IconBack = styled.span`
  margin-right: 15px;
  transform: rotate(0deg) scaleX(-1);
`;

const DescriptionSection = styled.div`
  height: 100%;
  width: 100%;
`;

const JobHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobTitle = styled.h1`
  font-size: ${fontSize.header};
  font-weight: 500;
  font-family: ${font.main};
  margin: 0 0 8px;
`;

const TypeTag = styled.span`
  font-size: ${fontSize.smallText};
  color: ${colors.secondary};
  padding: 6px 8px;
  font-weight: 500;
  border: 1px solid ${colors.secondary};
  border-radius: 4px;
  width: fit-content;
`;

const JobTime = styled.div`
  color: ${colors.gray};
  font-size: ${fontSize.smallText};
  display: flex;
  align-items: center;

  &.space {
    height: 40px;
    line-height: 40px;
  }
`;

const Logo = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 4px;
  border: none;
`;

const FlexBox = styled.div`
  display: flex;

  .column {
    flex-direction: column;
    justify-content: space-between;
  }

  .left-space {
    margin-left: 12px;
  }
`;

const CompanyName = styled.a`
  font-weight: bold;
  font-size: ${fontSize.subheader};
`;

const DescriptionDiv = styled.div`
  * {
    font-size: ${fontSize.contentText};
  }

  a {
    color: ${colors.primary};
    text-decoration: none;
  }
`;

const JobDetailsPage = (props) => {
  const { id } = useParams();
  const [currentJob, setCurrentJob] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await findJobById(id);
      setCurrentJob(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const linkStyles = {
    textDecoration: 'none',
    color: colors.primary,
    display: 'flex',
  };

  return (
    <Container>
      <AppHeader />
      {loading ? (
        <Loading />
      ) : (
        <SectionsContainer>
          <HowToApplySection>
            <LinkContainer>
              <Link to="/" style={linkStyles}>
                <IconBack className="material-icons">arrow_right_alt</IconBack> Back to search
              </Link>
            </LinkContainer>
            <HowToApplyTitle>How to apply</HowToApplyTitle>
            <HowToApplyContent
              dangerouslySetInnerHTML={{ __html: currentJob.how_to_apply }}
            ></HowToApplyContent>
          </HowToApplySection>
          <DescriptionSection>
            <JobHeader>
              <JobTitle>{currentJob.title}</JobTitle>
              <TypeTag>{currentJob.type}</TypeTag>
              <JobTime className="space">
                <span className="material-icons" style={{ marginRight: '8px', fontSize: '14px' }}>
                  schedule
                </span>{' '}
                {timeFrom(currentJob.created_at)}
              </JobTime>
            </JobHeader>
            <FlexBox style={{ margin: '36px 0' }}>
              <Logo src={currentJob.company_logo} />
              <FlexBox className="column left-space">
                <CompanyName>{currentJob.company}</CompanyName>
                <JobTime>
                  <span className="material-icons" style={{ marginRight: '8px', fontSize: '14px' }}>
                    public
                  </span>{' '}
                  {currentJob.location}
                </JobTime>
              </FlexBox>
            </FlexBox>
            <DescriptionDiv
              dangerouslySetInnerHTML={{ __html: currentJob.description }}
            ></DescriptionDiv>
          </DescriptionSection>
        </SectionsContainer>
      )}

      {/* <AppButton onClick={() => alert('hola')}>Click here please to get more details</AppButton> */}
    </Container>
  );
};

export default JobDetailsPage;
