import styled from 'styled-components';
import { Button } from '../table/table.style';

export const FormContainer = styled.div`
  display: flex;
  translate: ${({visible}) => visible ? 0 : 'calc(50% - 35px)'};
  width: fit-content;
  align-items: center;
  margin: auto;
  height: 70px;
  transition: .6s;
`;

export const InputsContainer = styled.div`
  display: inline-flex;
  align-items: center;
  border: solid 2px ${({ color }) => color};
  width: ${({visible}) => visible ? 'calc(100% - 70px)' : 0};
  translate: ${({visible}) => visible ? '0' : '4px'};
  overflow: hidden;
  height: ${({visible}) => visible ? '40px' : '38px'};;
  border-radius: 5px 0 0 5px;
  border-right: none;
  position: relative;
  transition: .6s;
`;

export const Separator = styled.span`
  ::before {
    content: '|';
    display: inline-block;
    translate: 0 -2px;
    color: grey;
  }
`;

export const NameInput = styled.input`
  height: 35px;
  outline: none;
  border: none;
  text-indent: 10px;
`;
export const IdInput = styled(NameInput)`
  width: 50px;
`;

export const AddButton = styled(Button)`
  border: solid 2px ${({color}) => color};
  border-radius: ${({visible}) => visible ? '0 5px 5px 0' : '5px'};
  height: 40px;
  translate: 0 -1.5px;
  margin: 0;
`;
