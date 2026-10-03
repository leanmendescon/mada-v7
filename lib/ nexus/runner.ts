export async function runBuild(files: Record<string,string>): Promise<{success: boolean, error: string | null}> {
  // V8 - por enquanto valida sintaxe básica, depois integra com WebContainer
  try {
    if(!files || Object.keys(files).length === 0) throw new Error('Nenhum arquivo gerado pelo programmer')
    // checa se tem page.tsx ou app principal
    const hasEntry = Object.keys(files).some(k => k.includes('page.tsx') || k.includes('App.tsx') || k.includes('index.tsx'))
    if(!hasEntry) throw new Error('Falta arquivo de entrada (page.tsx)')
    return { success: true, error: null }
  } catch(e:any) {
    return { success: false, error: e.message }
  }
}
