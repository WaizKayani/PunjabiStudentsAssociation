import { Suspense } from "react";
import site from "@/content/site.json";
import events from "@/content/events.json";
import { Hero } from "@/components/hero";
import { UpcomingEvent } from "@/components/upcoming-event";
import { Highlights } from "@/components/highlights";
import { Container } from "@/components/ui/container";

export default function HomePage() {
  const upcoming = [...events].sort((a, b) => +new Date(a.date) - +new Date(b.date))[0];

  return (
    <main>
      <Hero site={site} />
      <Container className="py-16">
        <Suspense>
          <UpcomingEvent event={upcoming} />
        </Suspense>
      </Container>
      <Container className="py-16">
        <Highlights />
      </Container>
      {/* Culture Showcase removed per request */}
    </main>
  );
}


