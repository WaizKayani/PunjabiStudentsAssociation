import { MDXFromFile } from "@/lib/mdx";
import { Container } from "@/components/ui/container";

export const metadata = { title: "About" };

export default async function AboutPage() {
  return (
    <main>
      <Container className="prose max-w-3xl py-12">
        <h1>About PSA at OSU</h1>
        <MDXFromFile relativePath="content/about.mdx" />
      </Container>
    </main>
  );
}


