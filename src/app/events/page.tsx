import { events } from "@/data/events";
import EventCarousel from "@/components/Event";

export default function EventPage() {
  const reversedEvents = [...events].reverse();
  
  return (
    <div className="space-y-16">
      {reversedEvents.map((event) => (
        <div key={event.id}>
          <EventCarousel event={event} />
        </div>
      ))}
    </div>
  );
}