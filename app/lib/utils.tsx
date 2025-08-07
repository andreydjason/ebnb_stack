// lib/utils.ts
export const sanitizeInput = (str: string): string =>
  str.replace(/[<>"'/\\&]/g, '');

export const removerAcentos = (texto: string): string =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');