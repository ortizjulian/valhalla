import React from "react";
import TextField from '@mui/material/TextField';
import {styled } from '@mui/material/styles';


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#1f6feb',
    },
    
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: '#1f6feb',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1f6feb',
      },
      
    },
    
  });

  export default function TextField_sessions({ label, id, type = "", select = false}) {
    return (
      <CssTextField 
        
        label={label} 
        id={id}
        margin="normal"
        select = {select}
        fullWidth
        type={type}
        name={id}
        autoFocus  
        InputLabelProps={{
          style: {
            color: 'white'
            
          }
        }}

        inputProps={{style:{
          color: 'white'
        }}}
      />
    );
  }
  