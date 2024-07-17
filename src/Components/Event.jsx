import React from 'react';

const Event = ({ name, date, location }) => (
  <div className="event">
    <h3>{name}</h3>
    <p>Data: {date}</p>
    <p>Localização: {location}</p>
  </div>
);

export default Event;