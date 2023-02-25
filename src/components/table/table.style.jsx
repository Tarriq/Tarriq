import styled, {keyframes} from 'styled-components';

const arrowAnimation = keyframes`
  100% {
    scale: 2;
    opacity: 0;
  }
`

export const Container = styled.div`
  margin: 100px auto;
  overflow: hidden;
  border-radius: 10px;
  width: fit-content;
  padding: 0;
`;
export const Actions = styled.td`
  display: flex;
  align-items: center;
  & div {
    cursor: pointer;
  }
`;
export const ButtonsContainer = styled.div`
  width: 90px;
  overflow: hidden;
`;
export const Buttons = styled.div`
  transition: 0.3s;
  min-width: max-content;
  translate: ${({ button }) => (button == 'delete' ? '0' : '-90px')};
`;

export const Button = styled.button`
  background: ${({ color }) => color};
  margin-inline: 10px;
  color: white;
  border: none;
  height: 30px;
  width: 70px;
  font-size: 14px;
  border-radius: 7px;
`;

export const MiniButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const MiniButton = styled(Button)`
  width: 30px;
  margin: 0;
`

export const UpdateInput = styled.input`
  width: 100%;
  border: none;
  position: relative;
  left: -5px;
  text-indent: 5px;
  border-radius: 5px;
  height: 30px;
  outline: none;
  color: black;
  background: ${({ visible }) => (visible ? 'hsl(0, 0%, 90%)' : 'transparent')};
`;

export const Arrow = styled.div`
animation-iteration-count: 0;
  :active {
    animation: ${arrowAnimation} .2s linear;
  }
`