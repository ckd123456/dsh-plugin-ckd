import { tool } from "@opencode-ai/plugin"

export const DshPluginCkd = async (ctx = {}) => ({
  tool: {
    dsh_hello: tool({
      description: "dsh sample tool: returns plugin version and workspace",
      args: { name: tool.schema.string().optional() },
      async execute(args, context) {
        const who = args?.name ?? "world"
        const dir = context?.directory ?? ctx.directory
        return "Hello, " + who + "! dsh-plugin-ckd v0.1.0 | " + (dir || "")
      },
    }),
  },
})

export default DshPluginCkd