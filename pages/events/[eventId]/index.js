import { useRouter } from "next/router";
import React from "react";
import { getEventById } from "../../../dummy_data/dummy-data";
import EventSummary from "../../../components/events/event-detail/EventSummary";
import EventLogistics from "../../../components/events/event-detail/EventLogistics";
import EventContent from "../../../components/events/event-detail/EventContent";

function Event() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <h3>No Event Found</h3>;
  }
  return (
    <>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics
        date={event.date}
        address={event.address}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default Event;
