import styled from 'styled-components';
import { colors } from '../style-guide';

const CheckboxContainer = styled.div`
  display: block;
  height: 30px;
  line-height: 30px;
  position: relative;
  margin-left: 14px;
  font-family: Poppins;
`;

const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  cursor: pointer;

  :after {
    position: absolute;
    top: -1px;
    left: -1px;
    content: '';
    height: 100%;
    width: 100%;
    background-color: #fefefe;
    border: 1px solid #cfd5d9;
    border-radius: 2px;
  }

  :checked:after {
    background-color: ${colors.primary};
    box-shadow: 0px 0px 3px 1px #1e86ff;
  }
`;

const Label = styled.label`
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: 500;
  margin-left: 12px;
  cursor: pointer;
`;

const CheckBox = ({ children, ...props }) => {
  const id = props.id ? props.id : props.name;
  return (
    <CheckboxContainer>
      <InputCheckbox {...props} />
      <Label htmlFor={id}>{children}</Label>
    </CheckboxContainer>
  );
};

export default CheckBox;
