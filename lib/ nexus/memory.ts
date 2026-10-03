import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function saveProject(prompt: string) {
  const { data, error } = await supabase.from('projects').insert({ prompt, status: 'researching' }).select().single()
  if(error) throw error; return data
}
export async function saveArchitecture(project_id: string, arch: any) {
  const { error } = await supabase.from('architectures').upsert({ project_id,...arch })
  if(error) throw error
}
export async function saveVersion(project_id: string, files: any, success: boolean, errorMsg: string | null) {
  const { error } = await supabase.from('project_versions').insert({ project_id, files, build_success: success, build_error: errorMsg })
  if(error) throw error
}
export async function logBuild(project_id: string, agent: string, message: string) {
  await supabase.from('build_logs').insert({ project_id, agent, message })
}
