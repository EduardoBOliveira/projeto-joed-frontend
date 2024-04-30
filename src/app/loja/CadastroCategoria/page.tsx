'use client'
import NavBar from "@/components/NavBar";
import Cardapio from "@/components/Cardapio";
import Rodape from "@/components/Rodape";
import { FormControl, TextField } from "@mui/material";
import React, { useState, ChangeEvent, FormEvent } from 'react';


export default function Home() {
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
    <main className="flex min-h-screen flex-col">
      <NavBar active="loja" />
      
      <div className="flex justify-between">
      <Cardapio />
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
        </FormControl>
      </div>
    </div>
      
      
      
      <Rodape/>
    </main>
  );
}
