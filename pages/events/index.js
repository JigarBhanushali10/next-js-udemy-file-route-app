import React from "react";
import { getAllEvents } from "../../dummy_data/dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search/EventsSearch";
import { useRouter } from "next/router";

function EventDetail() {
  const router = useRouter();
  const allEvents = getAllEvents();

  function onSearch({ month, year }) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <>
      <EventsSearch onSearch={onSearch}></EventsSearch>
      <EventList items={allEvents}></EventList>
    </>
  );
}

export default EventDetail;
