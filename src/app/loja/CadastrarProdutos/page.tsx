'use client'

import React from 'react';
import { FormControl, TextField, Button, Input, InputLabel, Select, MenuItem } from '@mui/material';
import FormularioCadastro from '@/components/FornularioCadastro';
import Rodape from '@/components/Rodape';
import NavBar from '@/components/NavBar';
import Cardapio from '@/components/Cardapio';

export default function ProdutosPage() {
  const categorias = ['Categoria A', 'Categoria B', 'Categoria C']

  return (
    <main className="flex min-h-screen flex-col">
      <NavBar active="loja"/>
      
      <div className='flex justify-between'>
      
      <Cardapio  />
      
      <div className='flex flex-col text-center mt-4'>
        <h1 className='mr-80 text-5xl'>Add New Project</h1>

        <div className='flex justify-between mt-14'>
          <div className='mr-80'>
            <FormularioCadastro/>
            <FormularioCadastro/>
            <FormularioCadastro/>
          </div>

          <div className='mr-80 flex flex-col gap-28'>
            
          <div>
            <h2 className='text-2xl'>Tamanho</h2>
              <Button variant="contained">P</Button>
              <Button variant="contained">M</Button>
              <Button variant="contained">G</Button>
              <Button variant="contained">GG</Button>
            </div>
        
            <div>
            <h2>Gênero</h2>
              <Button variant="contained">F</Button>
              <Button variant="contained">M</Button>
              <Button variant="contained">U</Button> {/* U para 'Unissex' */}
            </div>

            <div className='flex flex-col gap-2'>
              <div className='flex justify-between'>
              <h2>Categoria</h2>
              <Button variant="outlined" size="small">
              Add Categoria
              </Button>
              </div> 
              <FormControl fullWidth>
                <InputLabel id="categoria-label">Selecione uma categoria</InputLabel>
                <Select
                  labelId="categoria-label"
                  id="categoria-select"
                  label="Selecione uma categoria"
                >
                {categorias.map((categoria, index) => (
                  <MenuItem key={index} value={categoria}>
                    {categoria}
                  </MenuItem>
                ))}
                </Select>
              </FormControl>
              
            </div>
          </div>

          <div className='mr-80 '>
            <fieldset className='bg-white  w-60 h-52 mx-44 mb-4'>
              <Input type="file" inputProps={{ accept: 'image/*' }} fullWidth sx={{ marginTop: 'normal' }} className=''/> 
            </fieldset>
          </div>
        </div>
        
        <div className='flex justify-end mr-80'>
          <Button type="submit" variant="contained" color="primary" className='flex w-10' >
            Enviar
          </Button>
        </div>

      </div>
        
      </div> 
      
      <Rodape/>
    </main>
  );
}
