import React from "react";
import { useForm } from "react-hook-form";
import { promedioValidator } from "../validators";

function AdivinaEstilo() {
  const {register,formState:{ errors }, handleSubmit }=useForm();
  const onSubmit = (data) =>{
    console.log(data);
  }

  return (
    <div className="page-heading">
      <form onSubmit={handleSubmit(onSubmit)}>
        <center><h1>Adivina Estilo</h1></center>
        <label>Recinto</label>
        <select {...register('Recinto')}>
          <option value="Paraíso">Paraíso</option>
          <option value="Turrialba">Turrialba</option>
        </select>
        <br></br>
        <br></br>
        <label>Promedio</label>
        <input class="form-input" type="text" {...register('promedio',{
          required:true,
          validate: promedioValidator
        })}></input>
        <br></br>
        <br></br>
        {errors.promedio?.type === 'required' && <p>El promedio es requerido</p>}
        {errors.promedio && <p>El promedio debe estar entre 0 y 100</p>}
        
        <label>Sexo</label>
        <select {...register('sexo')}>
          <option value="F">F</option>
          <option value="M">M</option>
        </select>
        <br></br>
        <br></br>
        <center><button> Calcular </button></center>
        <br></br>
        <br></br>
        <label>Resultado</label>
        <textarea placeholder="Resultado encontrado" name="resultado" readOnly></textarea>
      </form>
    </div>
  );
}

export default AdivinaEstilo;