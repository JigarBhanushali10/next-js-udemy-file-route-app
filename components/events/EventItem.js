import React from "react";
import classes from "../../styles/event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
import ArrowIcon from "../icons/ArrowIcon";

function EventItem({ title, date, image, address, id }) {
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const formattedAddress = address.replace(", ", "\n");

  return (
    <li className={classes.item}>
      <img src={`/${image}`} className={classes.event_img} alt={title}></img>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon></DateIcon>
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon></AddressIcon>
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Events</span>
            <span className={classes.icon}>
              <ArrowIcon></ArrowIcon>
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
