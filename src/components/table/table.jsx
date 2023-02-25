import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  RemoveVoitures,
  UpdateVoitures,
  toggleInput,
  switchButtons,
  toggleRemove,
} from '../../slices/data-slice';
import {
  Actions,
  Buttons,
  Container,
  Button,
  UpdateInput,
  ButtonsContainer,
  MiniButton,
  MiniButtons,
  Arrow
} from './table.style';

const Table = () => {
  const dispatch = useDispatch();
  const voitures = useSelector(state => state.voitures.db).map(voiture => ({
    ...voiture,
    inputValue: voiture.marque,
  }));

  const handleUpdate = voiture => {
    const { id, inputValue } = voiture;
    if (!inputValue) {
      alert('kteb chi haja');
      return;
    }
    dispatch(UpdateVoitures({ id: id, marque: inputValue }));
    dispatch(toggleInput(id));
  };
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marque</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {voitures.map(voiture => {
            const { id, marque, isInputVisible, button, remove } = voiture;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>
                  <UpdateInput
                    visible={isInputVisible}
                    type='text'
                    name='value'
                    defaultValue={marque}
                    onChange={e => (voiture.inputValue = event.target.value)}
                    disabled={!isInputVisible}
                  />
                </td>
                <Actions>
                  <Arrow
                    onClick={() =>
                      dispatch(switchButtons({ id, button: 'delete' }))
                    }>
                    &#10094;
                  </Arrow>
                  <ButtonsContainer>
                    {remove ? (
                      <MiniButtons>
                        <MiniButton
                          onClick={() => dispatch(RemoveVoitures(id))}
                          color='hsl(0, 0%, 65%)'>
                          &#10003;
                        </MiniButton>
                        <MiniButton
                          onClick={() => dispatch(toggleRemove(id))}
                          color='hsl(0, 0%, 65%)'>
                          &#10005;
                        </MiniButton>
                      </MiniButtons>
                    ) : (
                      <Buttons button={button}>
                        <Button
                          color='hsl(0, 50%, 50%)'
                          onClick={() => dispatch(toggleRemove(id))}>
                          delete
                        </Button>

                        <Button
                          color='#38344c'
                          onClick={() => handleUpdate(voiture)}>
                          {isInputVisible ? 'Save' : 'Update'}
                        </Button>
                      </Buttons>
                    )}
                  </ButtonsContainer>
                  <Arrow
                    onClick={() =>
                      dispatch(switchButtons({ id: id, button: 'modifier' }))
                    }>
                    &#10095;
                  </Arrow>
                </Actions>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default Table;
