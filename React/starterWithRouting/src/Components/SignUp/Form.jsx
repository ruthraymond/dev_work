import React, {useState} from 'react';
import './App.css';

const Form = () => {
    const [name, setName] =useState (``);
    const [surname, setSurname] =useState (``);
    const [email, setEmail] =useState (``);
    const [dateofbirth, setDob] =useState (``);
    const [number, setNumber] =useState (``);
        return (
           <div > 
               <form >
           <label className="form">
               First Name:
           </label>
           <input type="text" name="firstname" value={name} 
           onChange={event => setName(event.target.value)}
           /><br></br>
           </form>
           <form action="" ><label className="form">
           Last Name:
       </label>
       <input type="text" name="surname" value={surname} 
       onChange={event => setSurname(event.target.value)}
       />
       <br></br></form>
           <form action="" ><label className="form">
           Email:
       </label>
       <input type="text" name="email" value={email} 
       onChange={event => setEmail(event.target.value)}
       />
       <br></br></form>
           <form action="" ><label className="form">
           Date of Birth:
       </label>
       <input type="date" name="dateofbirth" value={dateofbirth} 
       onChange={event => setDob(event.target.value)}
       /></form>
       <form action="" ><label className="form">
           Number:
       </label>
       <input type="number" name="number" value={number} 
       onChange={event => setNumber(event.target.value)}
       />
       <br></br></form>
       <form action="" >
           <label htmlFor="" className="form">
           <input type="radio" value="Female"/>Female
           </label> <br></br>
           <label htmlFor="" className="form">
           <input type="radio" value="Male"/>Male
           </label>
       </form>
       
       </div> 
                
           
        )
}

export default Form;