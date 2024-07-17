import React from 'react';
import Event from './Event';

const EventList = ({ events }) => (
  <div className="event-list">
    <h2>Lista de Festivais/Eventos no Brasil</h2>
    {events.map(event => (
      <Event
        key={event.id}  // ID único pra cada evento
        name={event.name}
        date={event.date}
        location={event.location}
      />
    ))}
  </div>
);

export default EventList;
