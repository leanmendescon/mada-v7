import { logBuild, saveArchitecture } from '../memory'

export async function architectAgent(projectId: string, research: any, prompt: string) {
  await logBuild(projectId, 'architect', 'Criando arquitetura...')
  const architecture = {
    stack: research.stack_suggestion || ['nextjs'],
    tables: [{ name: 'users', fields: ['id', 'email', 'created_at'] }],
    apis: ['/api/generate', '/api/projects'],
    features: [prompt],
    folders: ['app', 'components', 'lib/nexus'],
    research
  }
  await saveArchitecture(projectId, architecture)
  return architecture
}
