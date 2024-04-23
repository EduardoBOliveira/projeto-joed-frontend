// ProdutosPage.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FormControl, TextField, Button } from '@mui/material';

export default function FormularioCadastro() {
  const [nome, setNome] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Nome inserido:', nome);
    setNome('');
  };

  return (
    <div>
      <div>
        <FormControl component="form" onSubmit={handleSubmit}>
          <TextField 
            label="Nome" 
            variant="outlined" 
            value={nome} 
            onChange={handleInputChange} 
            fullWidth 
            margin="normal" 
          />
          {/* <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button> */}
        </FormControl>
      </div>
    </div>
  );
}
