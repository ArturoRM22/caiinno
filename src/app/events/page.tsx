import { events } from "@/data/events";
import EventCarousel from "@/components/Event";

export default function EventPage() {
  return (
    <div className="space-y-16"> {/* Adds consistent spacing between events */}
      {events.map((event) => (
        <div key={event.id}>
          <EventCarousel event={event} />
        </div>
      ))}
    </div>
  );
}