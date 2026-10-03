export async function runProgrammer(prompt: string, projectId: string, architecture: any) {
  return {
    'app/page.tsx': `// Generated for ${projectId}\nexport default function Page(){return <div>${prompt.slice(0,50)}</div>}`
  }
}
