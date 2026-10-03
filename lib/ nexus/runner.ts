import { runResearcher } from './agents/researcher'
import { runArchitect } from './agents/architect'
import { runProgrammer } from './agents/programmer'
import { saveFiles } from './git'

export async function runNexus(prompt: string, projectId: string = 'mada-v7') {
  console.log(`[NEXUS V8] Starting: ${prompt}`)
  
  // 1. Research
  const research = await runResearcher(prompt)
  console.log('[NEXUS] Research:', research)

  // 2. Architect
  const architecture = await runArchitect(prompt, research)
  console.log('[NEXUS] Architecture:', architecture)

  // 3. Programmer
  const code = await runProgrammer(prompt, architecture)
  console.log('[NEXUS] Code generated:', code.files?.length)

  // 4. Save
  if (code.files && code.files.length > 0) {
    const filesToSave = code.files.map((f: any) => ({
      path: f.path,
      content: f.content
    }))
    await saveFiles(filesToSave, projectId)
  }

  return {
    research,
    architecture,
    code,
    success: true
  }
}
