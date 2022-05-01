import React from "react";
import { useForm } from "react-hook-form";
function TipoProfesor() {
  const {register, handleSubmit }=useForm();
  const onSubmit = (data) =>{
    console.log(data);
  }
  return (
    <div className="page-heading">
      <form onSubmit={handleSubmit(onSubmit)}>
        <center><h1>Tipo de Profesor</h1></center>
        <center><label>Seleccione del profesor ...</label></center>
        <label>*Edad</label>
        <select {...register('edad')}>
          <option value="1">Menor o igual a 30</option>
          <option value="2">Entre 30 y 55</option>
          <option value="3">Mayor a 55</option>
        </select>
        <br></br>
       <label>*Género</label>
        <select {...register('genero')}>
          <option value="F">F</option>
          <option value="M">M</option>
          <option value="NA">NA</option>
        </select>
        <br></br>
        <label>*Autoevaluación</label>
        <select {...register('autoevaluación')}>
          <option value="B">Principiante</option>
          <option value="I">Intermedio</option>
          <option value="A">Avanzado</option>
        </select>
        <br></br>
        <label>*Veces que ha impartido el curso</label>
        <select {...register('vecesCurso')}>
          <option value="1">Nunca</option>
          <option value="2">1 a 5 veces</option>
          <option value="3">Más de 5 veces</option>
        </select>
        <br></br>
        <label>*Experiencia en : </label>
        <select {...register('experiencia')}>
          <option value="DM">Toma de decisiones</option>
          <option value="ND">Diseño de redes</option>
          <option value="O">Otro</option>
        </select>
        <br></br>
        <label>*Habilidad en computadora : </label>
        <select {...register('habcomputador')}>
          <option value="L">Baja</option>
          <option value="A">Promedio</option>
          <option value="H">Alta</option>
        </select>
        <br></br>
        <label>*Experiencia en tecnología web para enseñar : </label>
        <select {...register('expWeb')}>
          <option value="N">Nunca</option>
          <option value="S">A veces</option>
          <option value="O">A menudo</option>
        </select>
        <br></br>
        <label>*Experiencia usando sitios web: </label>
        <select {...register('expWebSite')}>
          <option value="N">Nunca</option>
          <option value="S">A veces</option>
          <option value="O">A menudo</option>
        </select>
        <br></br>
        <br></br>
        <center><button> Calcular </button></center>
        <br></br>
        <label>Resultado</label>
        <textarea placeholder="Resultado encontrado" name="resultado" readOnly></textarea>
      </form>
    </div>
  );
}

export default TipoProfesor;