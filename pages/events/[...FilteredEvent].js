import React from "react";
import { getFilteredEvents } from "../../dummy_data/dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";

function FilteredEvent() {
  const router = useRouter();
  const filteredEvent = router.query.FilteredEvent;
  let filteredEvents = [];
  console.log(filteredEvents.length);
  if (filteredEvent) {
    filteredEvents = getFilteredEvents({
      year: +filteredEvent[0],
      month: +filteredEvent[1],
    });
    return <EventList items={filteredEvents}></EventList>;
  }
}

export default FilteredEvent;
