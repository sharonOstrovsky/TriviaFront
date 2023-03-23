import React, { useContext} from "react";
import '../css/forms.css';
import FormInput from '../componets/FormIput';
import logo from '../Assets/img/G&L Blanco.png';
import robot from '../Assets/img/Robotino 1.png';
import ruleta from '../Assets/img/Ruleta.png';
import mensaje from '../Assets/img/registrarse.png';
import { useNavigate } from "react-router";
import { PreguntaContext} from "../context/PreguntaContext";

const Forms=() =>{
    const{ form, setForm} = useContext(PreguntaContext);
    let navegar = useNavigate();
   const input =[
       {
           id:1,
           name: "edad",
           type:"text",
           placeholder: "Edad",
           errorMessage:" Deberia incluir solo números",
           label: "Edad",
           pattern: "^[0-90]+$",
       

       },
       {
        id:2,
        name: "nombre",
        type:"text",
        placeholder: "Nombre",
        errorMessage:" Deberia tener 3-16 caracteres ",
        label: "Nombre",
        pattern: "^[A-Za-z0-9]{3,16}$",
       
    },
    {
        id:3,
        name: "telefono",
        type:"text",
        placeholder: "Telefono",
        errorMessage:"Deberia incluir solo números ",
        label: "Telefono",
        pattern:"[0-9]{0,13}",
       

    },
    {
        id:4,
        name: "mail",
        type:"email",
        placeholder: "Email",
        errorMessage:"Deberia ser una dirección de correo electronico válida ",
        label: "Email",
        

    },
   ];

    const handleSubmit = (e)=>{
        e.preventDefault();
       addUser(form);
        navegar('/pregunta')
        window.location.reload();
    };

    const onChange =(e)=> {
      setForm({...form,[e.target.name]: e.target.value});
    };
  
     
    const addUser =(data)=>{
         const requesInit = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        }
        
        fetch('https://triviatecnologica.herokuapp.com/api/juego/registro', requesInit)
        .then(res => res.json())
      };

    return (
    <div className="app">
         
          <div className="containerRobotino2">
              <div>
                 <img alt="mensajeRobtino" className="mensaje3"  src={mensaje}/>
                 <img alt="rbt" className="robot3" src={robot}/>
               </div>
          </div>
 {/*-------------------------------------------------*/ }
           <img alt="logoDeGyl" className="logoModal" src={logo}/>
        <form onSubmit={handleSubmit}>
           
            {
            input.map((input)=>(
              <FormInput 
              key={input.id} {...input} 
              value={form[input.name]}
              onChange={onChange}/>
            ))}
          
        </form>
               <div className="cont50">
                 <button onClick={handleSubmit} className="botonEmpezar" >Jugar</button>
                 <img alt="ruletaGyl" className="rul23" src={ruleta}/>
               </div>
              
    </div>
    );
};

export default Forms;