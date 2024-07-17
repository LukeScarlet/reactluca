import React from 'react';
import EventList from './Components/EventList';
import './App.css';

const events = [
  {
    id: 1,
    name: 'Rock in Rio',
    date: 'Setembro 2025',
    location: 'Rio de Janeiro, RJ'
  },
  {
    id: 2,
    name: 'Lollapalooza Brasil',
    date: 'Março 2025',
    location: 'São Paulo, SP'
  },
  {
    id: 2,
    name: 'Universo Paralelo',
    date: 'Dezembro/Janeiro 2024-2025',
    location: 'Bahia, BA'
  },
  {
    id: 2,
    name: 'Tomorrowland Brasil',
    date: 'Outubro 2024',
    location: 'São Paulo, SP'
  },
  {
    id: 2,
    name: 'The Town',
    date: 'Setembro 2024',
    location: 'São Paulo, SP'
  },

];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Festivais/Eventos no Brasil</h1>
      </header>
      <main>
        <EventList events={events} />
      </main>
    </div>
  );
}

export default App;
