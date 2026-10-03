import { researcherAgent } from './agents/researcher'
import { architectAgent } from './agents/architect'
import { programmerAgent } from './agents/programmer'
import { saveProject, saveVersion, logBuild } from './memory'
import { commitAndPush, createBranch } from './git'

export async function runNexus(prompt: string, projectId?: string) {
  const project = projectId ? { id: projectId } : await saveProject(prompt)
  const id = project.id

  try {
    await logBuild(id, 'nexus', 'NEXUS V8 iniciado...')
    const branch = await createBranch(id)
    await logBuild(id, 'nexus', `Branch criada: ${branch}`)

    const research = await researcherAgent(id, prompt)
    const architecture = await architectAgent(id, research, prompt)
    const files = await programmerAgent(id, architecture)

    await saveVersion(id, files, true, null)
    await commitAndPush(branch, `feat: ${prompt.slice(0,50)}`)
    await logBuild(id, 'nexus', 'Build finalizado com sucesso!')
    return { projectId: id, branch, files, success: true }
  } catch (e: any) {
    await logBuild(id, 'nexus', `Erro: ${e.message}`)
    await saveVersion(id, {}, false, e.message)
    return { projectId: id, success: false, error: e.message }
  }
}
