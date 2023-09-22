import React from "react";
import { getFilteredEvents } from "../../dummy_data/dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";

function FilteredEvent() {
  const router = useRouter();
  const filteredEvent = router.query.FilteredEvent;
  if (filteredEvent) {
    const filteredEvents = getFilteredEvents({
      year: +filteredEvent[0],
      month: +filteredEvent[1],
    });

    if (!filteredEvents.length) {
      return <h3>No Event Found</h3>;
    } else {
      return <EventList items={filteredEvents}></EventList>;
    }
  }
}

export default FilteredEvent;
