import { runArchitect } from "./agents/architect";
import { runProgrammer } from "./agents/programmer";
export async function runNexus(prompt: string) {
  const plan = await runArchitect(prompt);
  const html = await runProgrammer(prompt, plan);
  return { plan, html };
}
export const runner = runNexus;
