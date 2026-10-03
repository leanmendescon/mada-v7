export async function logBuild(projectId: string, agent: string, message: string) {
  console.log(`[${agent}] ${projectId.slice(0,8)}: ${message}`)
  return true
}

export async function saveProject(prompt: string) {
  return { id: `proj_${Date.now()}`, prompt, status: 'building' }
}

export async function saveArchitecture(projectId: string, arch: any) {
  console.log(`[arch] ${projectId.slice(0,8)} saved`)
  return arch
}

export async function saveVersion(projectId: string, files: any, success: boolean, error: string | null) {
  console.log(`[version] ${projectId.slice(0,8)} success=${success}`)
  return { projectId, files, success }
}
