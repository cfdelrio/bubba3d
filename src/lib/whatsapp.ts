// Reemplazá este número con el número real de WhatsApp de Hello Bubba 3D
// Formato: código de país + código de área + número (sin espacios ni guiones)
export const WA_NUMBER = '5491100000000';

export function getWaUrl(message?: string): string {
  const text = message ?? 'Hola! Vi los juguetes de Hello Bubba 3D y quiero consultar 😊';
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
