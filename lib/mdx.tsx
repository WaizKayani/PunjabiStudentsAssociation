import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "node:fs/promises";
import path from "node:path";

export async function MDXFromFile({ relativePath }: { relativePath: string }) {
  const file = await fs.readFile(path.join(process.cwd(), relativePath), "utf8");
  return <MDXRemote source={file} />;
}


