import { runArchitect } from './agents/architect'
import { runProgrammer } from './agents/programmer'
import { runResearcher } from './agents/researcher'
import { logBuild } from './memory'
import { saveFiles } from './git'

export async function runNexus(prompt: string, projectId?: string) {
  const id = projectId || `proj_${Date.now()}`
  
  await logBuild(id, 'nexus', 'Starting V8 pipeline')
  
  const research = await runResearcher(prompt)
  await logBuild(id, 'researcher', JSON.stringify(research).slice(0,200))
  
  const architecture = await runArchitect(prompt, id)
  await logBuild(id, 'architect', JSON.stringify(architecture).slice(0,200))
  
  const files = await runProgrammer(prompt, id, architecture)
  const savedPath = await saveFiles(id, files)
  
  await logBuild(id, 'programmer', `Saved ${Object.keys(files).length} files to ${savedPath}`)
  await logBuild(id, 'nexus', 'Pipeline complete')
  
  return { 
    projectId: id, 
    success: true, 
    files, 
    research, 
    architecture,
    path: savedPath
  }
}
