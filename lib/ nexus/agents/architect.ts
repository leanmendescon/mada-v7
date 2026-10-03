export async function runArchitect(prompt: string, projectId: string) {
  return {
    projectId,
    plan: prompt.slice(0,200),
    components: ['ui', 'api', 'db']
  }
}
