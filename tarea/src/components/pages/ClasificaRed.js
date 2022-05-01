import React from "react";
import { useForm } from "react-hook-form";
function ClasificaRed() {
  const {register, handleSubmit }=useForm();
  const onSubmit = (data) =>{
    console.log(data);
  }
  return (
    <div className="page-heading">
      <form onSubmit={handleSubmit(onSubmit)}>
        <center><h1>Clasificación de redes</h1></center>
        <center><label>Seleccione de la red ...</label></center>
        <label>*Confiabilidad :</label>
        <select {...register('confRed')}>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br></br>
       <label>*Número de enlaces : </label>
        <select {...register('enlaces')}>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
        <br></br>
        <label>*Capacidad :</label>
        <select {...register('capacidad')}>
          <option value="Low">Baja</option>
          <option value="Medium">Media</option>
          <option value="High">Alta</option>
        </select>
        <br></br>
        <label>*Costo :</label>
        <select {...register('costo')}>
          <option value="Low">Bajo</option>
          <option value="Medium">Medio</option>
          <option value="High">Alto</option>
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

export default ClasificaRed;