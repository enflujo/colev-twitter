/**
 * Convierte un número de una escala a otra - Mapear valores.
 *
 * @example
 * ```js
 * convertirEscala(10, 0, 20, 0, 1); // devuelve 0.5
 * ```
 *
 * @param {number} valor Valor que se quiere mapear a una nueva escala
 * @param {number} escalaBaseMin Número mínimo de la escala en la que esta el valor.
 * @param {number} escalaBaseMax Número máximo de la escala en la que esta el valor.
 * @param {number} escalaDestinoMin Número mínimo de la nueva escala.
 * @param {number} escalaDestinoMax Número máximo de la nueva escala.
 * @returns {number} Valor convertido a nueva escala.
 */
export const convertirEscala = (valor, escalaBaseMin, escalaBaseMax, escalaDestinoMin, escalaDestinoMax) => {
  return (
    ((valor - escalaBaseMin) * (escalaDestinoMax - escalaDestinoMin)) / (escalaBaseMax - escalaBaseMin) +
    escalaDestinoMin
  );
};
