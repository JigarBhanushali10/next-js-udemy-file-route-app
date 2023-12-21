import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import EventList from "../../components/events/EventList";

function FilteredEvent() {
  const [filteredEvents, setFilteredEvents] = useState([])
  const router = useRouter();
  const filteredEvent = router.query.FilteredEvent;
  useEffect(() => {
    if (filteredEvent) {
      fetch(`http://localhost:3000/api/events/${filteredEvent.join('/')}`).then((res) => {
        return res.json()
      }).then((res) => {
        console.log(res?.events);
        setFilteredEvents(res)
      })
    }

  }, [])
  if (filteredEvent) {
    console.log(filteredEvent);



    if (!filteredEvents.length) {
      return <h3>No Event Found</h3>;
    } else {
      return <EventList items={filteredEvents}></EventList>;
    }
  }
}

export default FilteredEvent;
