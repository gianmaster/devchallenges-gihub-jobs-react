import styled from 'styled-components';
import { colors, font, fontSize } from '../basis/style-guide';
import { timeFrom } from '../../utils/helpers';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 22px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  position: relative;
  font-family: ${font.main};
`;

const CardImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 4px;
  border: 1px solid #e4e5ea;
`;

const CardDescriptionBox = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;

  .link {
    font-weight: 400;
    font-size: ${fontSize.contentText};
    color: ${colors.secondary};
    margin-bottom: 15px;
    text-decoration: none;
  }
`;

const CardTitle = styled.a`
  font-weight: 500;
  font-size: ${fontSize.smallText};
  color: ${colors.secondary};
  margin-bottom: 8px;
  text-decoration: none;
`;

const CardTag = styled.span`
  font-size: ${fontSize.smallText};
  color: ${colors.secondary};
  padding: 6px 8px;
  border: 1px solid ${colors.secondary};
  border-radius: 4px;
  width: fit-content;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    position: absolute;
    right: 4px;
    bottom: 1px;
    width: 220px;
  }

  @media (min-width: 860px) {
    width: 320px;
  }

  @media (min-width: 1024px) {
    width: 400px;
  }
`;

const CardFooterItem = styled.div`
  color: ${colors.gray};
  font-size: ${fontSize.smallText};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const AppJobListItem = ({
  id,
  company,
  company_logo,
  company_url,
  created_at,
  location,
  url,
  type,
  title,
}) => {
  const logo = company_logo
    ? company_logo
    : 'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw_400x400.jpg';
  return (
    <Card>
      <CardImg alt="company logo" src={logo} />
      <CardDescriptionBox>
        <CardTitle href={company_url} target="_blank">
          {company}
        </CardTitle>
        <Link className="link" to={'/details/' + id}>
          {title}
        </Link>
        <CardTag>{type}</CardTag>
        <CardFooter>
          <CardFooterItem>
            <span className="material-icons">public</span> {location}
          </CardFooterItem>
          <CardFooterItem>
            <span className="material-icons">schedule</span> {timeFrom(created_at)}
          </CardFooterItem>
        </CardFooter>
      </CardDescriptionBox>
    </Card>
  );
};

export default AppJobListItem;
