import events from "@/content/events.json";
import { Container } from "@/components/ui/container";
import { EventsClient } from "@/components/events/events-client";

export const metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <main>
      <Container className="py-12">
        <h1 className="text-3xl font-bold">Events</h1>
        {/* Client filtering and lists */}
        <EventsClient events={events} />
      </Container>
    </main>
  );
}


