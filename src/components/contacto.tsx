import { Button } from "./boton";
import WhatsAppIcon from "../assets/WhatsAppIcon.svg";

interface ContactoProps {
  contacto: { tipo: string; valor?: string; url?: string }[];
}

export const Contacto = ({ contacto }: ContactoProps) => {
  const celular = contacto.find((item) => item.tipo === "Celular")?.valor;

  return (
    <section className="mt-8">
      <h3 className="text-2xl font-semibold border-b pb-2">Contacto</h3>
      <ul className="mt-4 space-y-3">
        {contacto.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="font-medium">{item.tipo}:</span>
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {item.url}
              </a>
            ) : (
              <span className="text-gray-700">{item.valor}</span>
            )}
          </li>
        ))}
      </ul>
      {celular && (
        <a
          href={`https://wa.me/${celular.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="">
            <img
              src="/src/assets/whatsapp.svg"
              className="w-8 h-8"
              alt="Logo tienda"
            />
          </Button>
        </a>
      )}
    </section>
  );
};
