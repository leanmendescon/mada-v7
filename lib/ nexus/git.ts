export async function createBranch(projectId: string) {
  return `nexus/${projectId.slice(0,8)}`
}
export async function commitAndPush(branch: string, message: string) {
  console.log(`[GIT] ${branch}: ${message}`)
  return { branch, pushed: true }
}
export async function getBranchName(projectId: string) {
  return `nexus/${projectId.slice(0,8)}`
}
