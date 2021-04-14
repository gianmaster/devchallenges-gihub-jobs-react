import styled from 'styled-components';
import { colors } from '../style-guide';

const InputRadioContainer = styled.div`
  display: block;
  height: 30px;
  line-height: 30px;
  position: relative;
  margin: 0 0 5px 14px;
  font-family: Poppins;
`;

const InputRadio = styled.input.attrs({ type: 'radio' })`
  position: relative;
  cursor: pointer;
  border-radius: 25px;
  padding-left: 5px;

  :after {
    position: absolute;
    top: -1px;
    left: -1px;
    content: '';
    height: 100%;
    width: 100%;
    background-color: #fefefe;
    border: 1px solid #cfd5d9;
    border-radius: 25px;
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

const Radio = ({ options, currentValue, onChange, ...props }) => {
  const opts = options.map((el) => {
    const name = props.name ? props.name : 'option_list';
    const cls = props.className ? props.className : 'option-list';
    const id = `${name}_${el.toLowerCase().replace(/\s/g, '')}`;
    return { value: el, name, cls, id };
  });

  return (
    <>
      {opts.map((option, idx) => (
        <InputRadioContainer key={idx}>
          <InputRadio
            className={option.cls}
            name={option.name}
            id={option.id}
            value={option.value}
            checked={currentValue === option.value}
            onChange={onChange}
          />
          <Label htmlFor={option.id}>{option.value}</Label>
        </InputRadioContainer>
      ))}
    </>
  );
};

export default Radio;
