'use client'
import { contextPresupuesto } from '@/app/Context/ContextPresupuesto';
import { useContextPresupuesto } from '@/app/Provider/ProviderGastos';
import React, { useContext, useState } from 'react'

export default function page() {

  const { presupuesto, guardarPresupuesto } = useContext(contextPresupuesto);

  const [montoInput, setMontoInput] = useState<string>("");

  function asignarPresupuesto() {
    const valor = Number(montoInput);
    if (!valor || valor <= 0) return;

    guardarPresupuesto({ monto: valor });
    setMontoInput("");
  }

  return (
    <div className='container'>

        <h1>Asignación de Presupuesto</h1>
        <br></br>

        <form className='form' action="">
            <input type='number' className='form-control' placeholder='Ingrese su presupuesto' value={montoInput} onChange={(e) => setMontoInput(e.target.value)}></input>
            <br></br>

            <button type='button' className='btn btn-success' onClick={asignarPresupuesto}>Asignar Presupuesto</button>

        </form>

        <br></br>

        <div>Presupuesto Disponible: {'L.'}{presupuesto ? presupuesto.monto:0}</div>

    </div>
  )
}
