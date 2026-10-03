export async function runResearcher(prompt: string) {
  return { insights: `Research for: ${prompt.slice(0,100)}`, sources: [] }
}
