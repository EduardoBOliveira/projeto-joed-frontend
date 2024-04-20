// ProdutosPage.tsx
import React, { useState } from 'react';
import { FormControl, TextField, Button } from '@mui/material';

import NavBar from '@/components/NavBar';
import Cardapio from '@/components/Cardapio';
import Rodape from '@/components/Rodape';

export default function ProdutosPage() {
//   const [nome, setNome] = useState('');

//   const handleInputChange = (event) => {
//     setNome(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log('Nome inserido:', nome);
//     setNome('');
//   };

  return (
    <main className="flex min-h-screen flex-col">
      <NavBar active="loja"/>
      
      
      <div className='flex justify-between gap-48'>
        <Cardapio />
        <div> {/* abertura da div do Titulo*/}
          <h1>Add New Project</h1>
        </div> {/* fechamento da div do Titulo*/}

        <div> {/* abertura da div dos formularios NOME/PREÇO/DESCRIÇÃO*/}
          <div> {/* abertura da div do formulario NOME*/}
            <FormControl component="form">
              <TextField 
                label="Nome" 
                variant="outlined" 
                // value={nome} 
                // onChange={handleInputChange} -> onSubmit={handleSubmit}
                fullWidth 
                margin="normal" 
              />
              {/* <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button> */}
            </FormControl>
          </div>{/* fechamento da div do formulario NOME*/}
          
          <div>{/* abertura da div do formulario PREÇO*/}
          <FormControl component="form">
              <TextField 
                label="Preço" 
                variant="outlined" 
                // value={nome} 
                // onChange={handleInputChange} -> onSubmit={handleSubmit}
                fullWidth 
                margin="normal" 
              />
              </FormControl>
          </div>{/* fechamento da div do formulario PREÇO*/}

          <div>{/* abertura da div do formulario DESCRIÇÃO*/}
          <FormControl component="form">
              <TextField 
                label="Descrição" 
                variant="outlined" 
                // value={nome} 
                // onChange={handleInputChange} -> onSubmit={handleSubmit}
                fullWidth 
                margin="normal" 
              />
              </FormControl>
          </div>{/* fechmaneto da div do formulario DESCRIÇÃO*/}

        </div>{/* fechamento da div dos formularios NOME/PREÇO/DESCRIÇÃO*/}

        <div>{/* abertura da div dos campos Tamanho/Genero/Categoria*/}
          jdsfijsdjfsdafasdkh
        </div>{/* fechamento da div dos campos Tamanho/Genero/Categoria*/}

        <div>{/* abertura da div do campo IMAGEM*/}
          sjfsakojdojsad
        </div>{/* fechamento da div do campo IMAGEM*/}

        <div>{/* abertura da div do botão ADD PRODUCT*/}
          soakdfpoaskdsa
        </div>{/* abertura da div do botão ADD PRODUCT*/}
      </div>
      
      <Rodape/>
    </main>
  );
}
