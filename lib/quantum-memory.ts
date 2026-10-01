// aceita 1 ou 2 argumentos pra nunca quebrar
export async function saveQuantum(id: any, data?: any) {
  console.log('Salvando:', id, data)
  return true
}

export async function loadQuantum(id: string) {
  return null
}

export async function getQuantum(id: string) {
  return null
}
