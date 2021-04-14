import { Button } from '../basis/buttons';

const AppButton = ({ onClick, children }) => {
  return (
    <Button primary onClick={onClick}>
      {children}
    </Button>
  );
};

export default AppButton;
