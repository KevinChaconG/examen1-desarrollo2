import { createContext } from "react";
import { Gasto } from "../Modelos/Gasto";

export const ContextGastos=createContext({
    gasto:[] as Gasto[],
    registroGasto: [] as Gasto[],
    cargarGastos:()=>{}

})