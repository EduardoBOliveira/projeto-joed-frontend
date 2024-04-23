// ProdutosPage.tsx
"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FormControl, TextField, Button, Input } from '@mui/material';

import NavBar from '@/components/NavBar';
import Cardapio from '@/components/Cardapio';
import Rodape from '@/components/Rodape';
import FormularioCadastro from '@/components/FornularioCadastro';

export default function ProdutosPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar active="loja"/>
      
      <div className='flex justify-between'>
      
      <Cardapio />
      
      <div className='flex flex-col text-center'>
      <h1 className='mr-96'>Add New Project</h1>

      <div className='flex justify-between mt-10'>
        <div className='mr-96'>
        <FormularioCadastro/>
        <FormularioCadastro/>
        <FormularioCadastro/>
        </div>

        <div className='mr-96'>
        <FormularioCadastro/>
        <FormularioCadastro/>
        <FormularioCadastro/>
        </div>

        <div className='mr-96'>
            <fieldset className='bg-white  w-52 h-52 mx-24 mb-4 '>
              <Input type="file" accept="image/*" fullWidth margin="normal" className=' '/> 

            </fieldset>
          
        </div>

      </div>

        <Button type="submit" variant="contained" color="primary" className=''>
          Enviar
        </Button>
      </div>
        
        

      </div> 
      
      <Rodape/>
    </main>
  );
}
