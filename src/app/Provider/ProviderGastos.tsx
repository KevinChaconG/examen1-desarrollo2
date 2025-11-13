'use client'

import React, { useContext, useEffect, useState } from 'react'
import { PlantillaReact } from '../Modelos/PlantillaReact'
import { Gasto } from '../Modelos/Gasto'
import { ContextGastos } from '../Context/ContextGastos'

export default function ProviderGastos({children}:PlantillaReact) {

    let urlGasto = "http://localhost:5050/gasto"
    const [gasto, setGastos] =useState<Gasto[]>([])
    const [registroGasto, setRegistroGasto]=useState<Gasto[]>([])

        async function cargarGastos() {

        try {
            const resp = await fetch(urlGasto)
            const data = await resp.json()
            setGastos(data)

            console.log(gasto)

        } catch (error) {
            console.log('Ocurrió un error al invocar el servicio')
        }

    }

    async function registrarGasto(gasto:Gasto){

        try {

            const respuesta=await fetch(urlGasto,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ productoId: gasto.id })
            })

            const resultado=await respuesta.json()
            alert("Producto agregado al carrito correctamente")
            setGastos([...registroGasto, gasto])

            cargarGastos()
            
        } catch (error) {
            alert("Ocurrió un error"+error)
            
        }

    }

        useEffect(() => {
        cargarGastos()

    }, []);

       useEffect(() => {
        console.log(gasto)
    }, [gasto])

  return (

    <ContextGastos.Provider value={{gasto, cargarGastos,registroGasto}}>
        {children}
    </ContextGastos.Provider>
    

  )
}

export function useContextPresupuesto(){
    return useContext(ContextGastos)
}
