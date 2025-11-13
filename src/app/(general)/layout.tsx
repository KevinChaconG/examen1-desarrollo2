import NavBar from "../Componentes/NavBar";

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <NavBar></NavBar>
        {children}
    </div>
  );
}