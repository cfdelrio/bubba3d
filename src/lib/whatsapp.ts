export const WA_NUMBER = '5491132543998';

export function getWaUrl(message?: string): string {
  const text = message ?? 'Hola! Vi los juguetes de Hello Bubba 3D y quiero consultar 😊';
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
