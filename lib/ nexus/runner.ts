import { runArchitect } from './agents/architect'
import { runProgrammer } from './agents/programmer'
import { runResearcher } from './agents/researcher'
import { logBuild } from './memory'

export async function runNexus(prompt: string, projectId?: string) {
  const id = projectId || `proj_${Date.now()}`
  await logBuild(id, 'nexus', 'Starting V8 pipeline')
  
  const research = await runResearcher(prompt)
  const arch = await runArchitect(prompt, id)
  const files = await runProgrammer(prompt, id, arch)
  
  await logBuild(id, 'nexus', 'Pipeline complete')
  
  return { projectId: id, success: true, files, research, architecture: arch }
}
