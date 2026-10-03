import { runResearcher } from './agents/researcher'
import { runArchitect } from './agents/architect'
import { runProgrammer } from './agents/programmer'

export async function runNexus(prompt: string) {
  const research = await runResearcher(prompt)
  const architecture = await runArchitect(prompt, research)
  const code = await runProgrammer(prompt, architecture)
  return { research, architecture, code, success: true }
}
