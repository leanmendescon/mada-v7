// NEXUS V8 - MEMORY com fallback para não quebrar build
let supabase: any = null
try {
  const { createClient } = require('@supabase/supabase-js')
  if(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY){
    supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
  }
} catch(e){ console.log('Supabase not configured yet') }

export async function saveProject(prompt: string) {
  if(!supabase) return { id: 'mock-'+Date.now(), prompt, status: 'researching', created_at: new Date().toISOString() }
  const { data, error } = await supabase.from('projects').insert({ prompt, status: 'researching' }).select().single()
  if(error) throw error; return data
}
export async function saveArchitecture(project_id: string, arch: any) {
  if(!supabase) return
  const { error } = await supabase.from('architectures').upsert({ project_id,...arch })
  if(error) console.error(error)
}
export async function saveVersion(project_id: string, files: any, success: boolean, errorMsg: string | null) {
  if(!supabase) return
  await supabase.from('project_versions').insert({ project_id, files, build_success: success, build_error: errorMsg })
}
export async function logBuild(project_id: string, agent: string, message: string) {
  if(!supabase) { console.log(`[${agent}] ${message}`); return }
  await supabase.from('build_logs').insert({ project_id, agent, message })
}
