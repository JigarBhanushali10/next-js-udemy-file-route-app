import React from "react";
import EventItem from "./EventItem";
import classes from "../../styles/event-list.module.css";

function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((item) => {
        return (
          <EventItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            address={item.address}
            date={item.date}
          ></EventItem>
        );
      })}
    </ul>
  );
}

export default EventList;
