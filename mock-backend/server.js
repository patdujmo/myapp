const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// --- Mock-Daten ---
let events = [
  {
      id: '123456',
      imageUrl: 'assets/testdata/concert.png',
      title: 'Sommerkonzert 2025',
      description: 'Erlebe einen unvergesslichen Abend mit Live-Musik unter freiem Himmel.',
      location: 'Berlin',
      distanceKm: 12,
      date: new Date('2025-08-20')
    },
    {
      id: '1234567',
      imageUrl: 'assets/testdata/concert.png',
      title: 'Wochenendmarkt',
      description: 'Regionale Produkte, Handwerk und kulinarische Highlights.',
      location: 'Hamburg',
      distanceKm: 5,
      date: new Date('2025-09-05')
    },
    {
      id: '234567',
      imageUrl: 'assets/testdata/concert.png',
      title: 'Straßenfestival Hamburg',
      description: 'Genieße internationale Streetfood-Küche und Live-Acts in der Hamburger Innenstadt.',
      location: 'Hamburg',
      distanceKm: 8,
      date: new Date('2025-09-05')
    },
    {
      id: '345678',
      imageUrl: 'assets/testdata/concert.png',
      title: 'Kunst Ausstellung Köln',
      description: 'Entdecke zeitgenössische Kunstwerke von lokalen und internationalen Künstlern.',
      location: 'Köln',
      distanceKm: 20,
      date: new Date('2025-10-12')
    },
    {
      id: '466789',
      imageUrl: 'assets/testdata/concert.png',
      title: 'Fußballspiel Düsseldorf',
      description: 'Erlebe die Spannung beim Derby zwischen den lokalen Rivalen live im Stadion.',
      location: 'Düsseldorf',
      distanceKm: 15,
      date: new Date('2025-09-18')
    },
    {
      id: '567890',
      imageUrl: 'assets/testdata/concert.png',
      title: 'Theater Premiere München',
      description: 'Sei dabei bei der Premiere des neuen Theaterstücks im Münchner Stadttheater.',
      location: 'München',
      distanceKm: 25,
      date: new Date('2025-11-01')
    },
    {
      id: '678901',
      imageUrl: 'assets/testdata/concert.png',
      title: 'Familientag im Zoo',
      description: 'Spaß und Abenteuer für die ganze Familie mit spannenden Tierbegegnungen. Spaß und Abenteuer für die ganze Familie mit spannenden Tierbegegnungen.',
      location: 'Leipzig',
      distanceKm: 30,
      date: new Date('2025-08-30')
    }
];

let users = [
  { id: '9134', name: 'Joe', lastname: 'Doe' },
  { id: '9222', name: 'Anna', lastname: 'Doe' }
];

// Favoriten: Array von { userId, eventId }
let favorites = [
  { userId: '9134', eventId: '123456' },
  { userId: '9134', eventId: '1234567' },
  { userId: 'xs9222', eventId: '678901' }
];

// --- Routes ---

// 1. Alle Events mit Favoriten-Flag für User
app.get('/events', (req, res) => {
  const userId = req.query.userId;
  const eventsWithFav = events.map(e => ({
    ...e,
    isFavorite: favorites.some(f => f.userId === userId && f.eventId === e.id)
  }));
  res.json(eventsWithFav);
});

// 2. Einzelnes Event
app.get('/events/:id', (req, res) => {
  const event = events.find(e => e.id === req.params.id);
  if (!event) return res.status(404).json({ message: 'Event not found' });
  res.json(event);
});

// 3. Favorit hinzufügen
app.post('/favorites', (req, res) => {
  const { userId, eventId } = req.body;
  if (!favorites.some(f => f.userId === userId && f.eventId === eventId)) {
    favorites.push({ userId, eventId });
  }
  res.json({ message: 'Favorit hinzugefügt' });
});

// 4. Favorit entfernen
app.delete('/favorites', (req, res) => {
  const { userId, eventId } = req.body;
  favorites = favorites.filter(f => !(f.userId === userId && f.eventId === eventId));
  res.json({ message: 'Favorit entfernt' });
});

// 5. Favoriten eines Users abrufen
app.get('/users/:userId/favorites', (req, res) => {
  const userId = req.params.userId;

  // Prüfen, ob User existiert
  const userExists = users.some(u => u.id === userId);
  if (!userExists) return res.status(404).json({ message: 'User not found' });

  // Alle Events, die favorisiert wurden
  const userFavEvents = events
    .filter(e => favorites.some(f => f.userId === userId && f.eventId === e.id))
    .map(e => ({ ...e, isFavorite: true }));

  res.json(userFavEvents);
});


// --- Server starten ---
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mock backend läuft auf http://localhost:${PORT}`);
});
