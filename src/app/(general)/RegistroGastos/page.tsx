'use client'
import { useContextPresupuesto } from '@/app/Provider/ProviderGastos'
import React, { useState } from 'react'

export default function page() {

    const {gasto, cargarGastos,registroGasto} = useContextPresupuesto();

    const [idGasto, setIdGasto]=useState<number>(0)
    const [categoria, setCategoria]=useState<string>('')
    const [monto, setMonto]=useState<number>(0)
    const [fecha, setFecha]=useState<Date>()
    const [urlGasto, setUrlGasto]=useState<string>('')
    
  return (


    <div>
      Registro Gastos
    </div>
  )
}
