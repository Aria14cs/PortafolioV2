import { useState, useEffect } from "react";
import { portafolioData } from "../data/portafolioData";

export const usePortafolio = () => {
  const [data] = useState(portafolioData);

  useEffect(() => {
    document.title = `${data.nombre} - Portafolio`;
  }, [data]);

  return { data };
};
