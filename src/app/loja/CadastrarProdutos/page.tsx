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
            
          <div className='flex flex-col gap-4 flex-cente'>
            <h2 className='text-2xl'>Tamanho</h2>
              <div className='flex gap-4'>
                <Button variant="contained">P</Button>
                <Button variant="contained">M</Button>
                <Button variant="contained">G</Button>
                <Button variant="contained">GG</Button>
              </div>
            </div>
        
            <div className='flex flex-col gap-4'>
            <h2 className='text-2xl'>Gênero</h2>
              <div className='flex gap-4'>
                <Button variant="contained">Feminio</Button>
                <Button variant="contained">Masculino</Button>
                <Button variant="contained">Unissex</Button> {/* U para 'Unissex' */}
              </div>
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

          <div className="mr-80">
            <label htmlFor="upload" className="block text-sm font-medium text-gray-700">
              Escolha uma imagem:
            </label>
            <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M17 38c0 1.657 1.343 3 3 3h8c1.657 0 3-1.343 3-3v-8h-14v8zm20-19v-14c0-1.657-1.343-3-3-3h-14v8c0 .552-.447 1-1 1s-1-.448-1-1v-8h-3c-1.657 0-3 1.343-3 3v14h-5c-1.657 0-3 1.343-3 3v16c0 1.657 1.343 3 3 3h28c1.657 0 3-1.343 3-3v-16c0-1.657-1.343-3-3-3h-5z"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Selecione um arquivo</span>
                    <input id="upload" name="upload" type="file" className="sr-only" />
                  </label>
                </div>
                <p className="text-xs text-gray-500">ou arraste e solte</p>
              </div>
            </div>
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
