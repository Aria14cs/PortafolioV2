interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-white font-medium transition ${className}`}
  >
    {children}
  </button>
);
