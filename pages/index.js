import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy_data/dummy-data";

function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents}></EventList>
    </div>
  );
}

export default Home;
