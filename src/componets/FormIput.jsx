import React,{useState} from 'react';
import '../css/formInput.css';

const  FormInput =(props)=>{
   
  const[focused, setFocussed]= useState(false);  

  const {label, errorMessage, onChange, id, ...inputProps}= props;

  const handleFocus = (e)=>{
     setFocussed(true);
  };

     return (
         <div className="formInput">
             <label>{label}</label>
             <input {...inputProps} onChange={onChange}
             onBlur={handleFocus}
             focused={focused.toString()}
             /> 
              <span className='spanForm'>{errorMessage}</span>
         </div>
     );
 };
 export default FormInput;