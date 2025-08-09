import leaders from "@/content/leaders.json";
import { Container } from "@/components/ui/container";
import { LeadershipClient } from "@/components/leadership/leadership-client";

export const metadata = { title: "Leadership" };

export default function LeadershipPage() {
  return (
    <main>
      <Container className="py-12">
        <h1 className="text-3xl font-bold">Leadership</h1>
        <LeadershipClient leaders={leaders} />
      </Container>
    </main>
  );
}


