import { Button } from '../common/buttons';

const AppButton = ({ onClick, children }) => {
  return (
    <Button primary onClick={onClick}>
      {children}
    </Button>
  );
};

export default AppButton;
