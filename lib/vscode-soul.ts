// lib/vscode-soul.ts - stub pra não quebrar o build
export async function installExtension(name: string) {
  console.log(`Instalando extensão: ${name}`)
  return true
}

export const SOUL = {
  active: true,
}
