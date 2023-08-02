export function minutesToHours(minutes: number) {
  if (minutes < 0) {
    throw new Error('O valor dos minutos não pode ser negativo.');
  }

  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;

  let result = '';

  if (hours === 1) {
    result += '1 hora';
  } else if (hours > 1) {
    result += `${hours} horas`;
  }

  if (minutesLeft === 1) {
    result += ' e 1 minuto';
  } else if (minutesLeft > 1) {
    result += ` e ${minutesLeft} minutos`;
  }

  return result;
}