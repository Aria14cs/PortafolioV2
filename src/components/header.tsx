interface HeaderProps {
  nombre: string;
}

export const Header = ({ nombre }: HeaderProps) => (
  <header className="flex justify-between items-center p-4 shadow-md bg-gray-100 rounded-lg">
    <h1 className="text-2xl font-bold">{nombre}</h1>
  </header>
);
