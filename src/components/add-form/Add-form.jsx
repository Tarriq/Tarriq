import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addVoitures } from '../../slices/data-slice';
import {
  FormContainer,
  InputsContainer,
  IdInput,
  NameInput,
  Separator,
  AddButton,
} from './form.style';

const AddForm = () => {
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const defaultFormFields = {
    id: '',
    marque: '',
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { id, marque } = formFields;
  const color = id && marque ? 'green' : 'hsl(0, 50%, 50%)';

  const handleSubmit = event => {
    event.preventDefault();
    if (!id || !marque) {
      if (!visibility){
        console.log(visibility)
        setVisibility(true);
        
      } 
      return;
    }
    dispatch(addVoitures({ id, marque }));
    setFormFields(defaultFormFields);
    setVisibility(false);
    console.log(visibility)
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <FormContainer visible={visibility}>
      <form onSubmit={handleSubmit}>
        <InputsContainer visible={visibility} color={color}>
          <IdInput
            placeholder='ID'
            type='text'
            name='id'
            value={id}
            onChange={handleChange}
          />
          <Separator />
          <NameInput
            placeholder='Marque'
            type='text'
            name='marque'
            value={marque}
            onChange={handleChange}
          />
        </InputsContainer>
        <AddButton visible={visibility} color={color}>Add</AddButton>
      </form>
    </FormContainer>
  );
};

export default AddForm;
