'use client'
import React, { useEffect, useState } from 'react'
import { PlantillaReact } from '../Modelos/PlantillaReact'
import { Presupuesto } from '../Modelos/Presupuesto'
import { Gasto } from '../Modelos/Gasto'
import { contextPresupuesto } from '../Context/ContextPresupuesto'

export default function ProviderPresupuesto({children}:PlantillaReact) {

    const [presupuesto, setPresupuesto] = useState<Presupuesto | null>(null);

     function guardarPresupuesto(p: Presupuesto) {
    setPresupuesto(p);
  }

    useEffect(() => {
    if (presupuesto) {
      console.log("Presupuesto asignado:", presupuesto.monto);
    }
  }, [presupuesto]);

  return (
    <contextPresupuesto.Provider value={{presupuesto,guardarPresupuesto,}}>
      {children}
    </contextPresupuesto.Provider>
  )
}
