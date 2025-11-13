import { createContext } from "react";
import { Gasto } from "../Modelos/Gasto";
import { Presupuesto } from "../Modelos/Presupuesto";

export interface ContextPresupuestoType {
  presupuesto: Presupuesto | null;
  guardarPresupuesto: (presupuesto: Presupuesto) => void;
}

export const contextPresupuesto = createContext<ContextPresupuestoType>({
  presupuesto: null,
  guardarPresupuesto: () => {},
});