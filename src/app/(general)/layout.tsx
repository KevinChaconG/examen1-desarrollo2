import NavBar from "../Componentes/NavBar";
import ProviderPresupuesto from "../Provider/ProviderPresupuesto";

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        
        <ProviderPresupuesto>
            <NavBar></NavBar>
        </ProviderPresupuesto>
        {children}
    </div>
  );
}