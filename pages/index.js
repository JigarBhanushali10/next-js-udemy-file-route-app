import { useEffect, useState } from "react";
import EventList from "../components/events/EventList";
import { API_BASE_URL } from '../utils/config';
function Home() {
  const [featuredEvents, setFeaturedEvents] = useState()


  const deleteEvent = (id) => {
    console.log(API_BASE_URL)
    let text = "Click on Yes to delete Event";
    if (confirm(text) == true) {
      fetch(`${API_BASE_URL}events/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        return res.json()
      }).then((res) => {
        console.log(res);
        getFeaturedEvents()
      })
    } else {
      return
    }


  }


  const getFeaturedEvents = () => {
    fetch(`${API_BASE_URL}events`, {
      method: 'GET',
      headers: {
        'isFeatured': true,
      },
    }).then((res) => {
      return res.json()
    }).then((res) => {
      setFeaturedEvents(res.events)
    })
  }
  useEffect(() => {
    getFeaturedEvents()

  }, [])
  return (
    <div>
      <EventList items={featuredEvents} deleteEvent={deleteEvent}></EventList>
    </div>
  );
}

export default Home;
