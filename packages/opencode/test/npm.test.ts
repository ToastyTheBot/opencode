import { describe, expect, test } from "bun:test"
import fs from "fs/promises"
import path from "path"

describe("Npm module", () => {
  test("uses arborist-based installation", async () => {
    const file = path.join(__dirname, "../src/npm/index.ts")
    const text = await fs.readFile(file, "utf-8")

    expect(text).toContain("@npmcli/arborist")
    expect(text).toContain("new Arborist")
    expect(text).toContain("reify")
  })

  test("does not pass hardcoded registry args", async () => {
    const file = path.join(__dirname, "../src/npm/index.ts")
    const text = await fs.readFile(file, "utf-8")

    expect(text).not.toContain("--registry")
    expect(text).not.toContain("registry=")
  })
})
