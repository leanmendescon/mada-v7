import fs from 'fs'
import path from 'path'

export async function saveFiles(projectId: string, files: Record<string, string>) {
  const base = path.join(process.cwd(), 'generated', projectId)
  if (!fs.existsSync(base)) fs.mkdirSync(base, { recursive: true })
  
  for (const [filePath, content] of Object.entries(files)) {
    const full = path.join(base, filePath)
    fs.mkdirSync(path.dirname(full), { recursive: true })
    fs.writeFileSync(full, content)
  }
  return base
}

export async function commitFiles() {
  return true
}
