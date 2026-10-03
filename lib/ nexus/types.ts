export type ProjectStatus = 'researching' | 'architecting' | 'designing' | 'coding' | 'testing' | 'debugging' | 'done' | 'error'
export type Project = { id: string; prompt: string; status: ProjectStatus; created_at: string }
export type Architecture = { project_id: string; stack: string[]; tables: any[]; apis: string[]; features: string[]; folders: string[]; research: any }
export type BuildLog = { project_id: string; success: boolean; error: string | null; files: Record<string,string> }
export type AgentName = 'researcher'|'architect'|'designer'|'programmer'|'tester'|'security'|'debugger'
