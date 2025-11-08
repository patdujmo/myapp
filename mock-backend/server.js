import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// --- Mock-Daten ---
let events = [
    {
      id: '123456',
      imageUrl: 'http://localhost:3000/images/concert.png',
      title: 'Sommerkonzert 2025',
      description: 'Erlebe einen unvergesslichen Abend mit Live-Musik unter freiem Himmel.',
      location: 'Berlin',
      distanceKm: 12,
      date: new Date('2025-08-20')
    },
    {
      id: '1234567',
      imageUrl: 'http://localhost:3000/images/concert.png',
      title: 'Wochenendmarkt',
      description: 'Regionale Produkte, Handwerk und kulinarische Highlights.',
      location: 'Hamburg',
      distanceKm: 5,
      date: new Date('2025-09-05')
    },
    {
      id: '234567',
      imageUrl: 'http://localhost:3000/images/concert.png',
      title: 'Straßenfestival Hamburg',
      description: 'Genieße internationale Streetfood-Küche und Live-Acts in der Hamburger Innenstadt.',
      location: 'Hamburg',
      distanceKm: 8,
      date: new Date('2025-09-05')
    },
    {
      id: '345678',
      imageUrl: 'http://localhost:3000/images/concert.png',
      title: 'Kunst Ausstellung Köln',
      description: 'Entdecke zeitgenössische Kunstwerke von lokalen und internationalen Künstlern.',
      location: 'Köln',
      distanceKm: 20,
      date: new Date('2025-10-12')
    },
    {
      id: '466789',
      imageUrl: 'http://localhost:3000/images/person.png',
      title: 'Fußballspiel Düsseldorf',
      description: 'Erlebe die Spannung beim Derby zwischen den lokalen Rivalen live im Stadion.',
      location: 'Düsseldorf',
      distanceKm: 15,
      date: new Date('2025-09-18')
    },
    {
      id: '567890',
      imageUrl: 'http://localhost:3000/images/concert.png',
      title: 'Theater Premiere München',
      description: 'Sei dabei bei der Premiere des neuen Theaterstücks im Münchner Stadttheater.',
      location: 'München',
      distanceKm: 25,
      date: new Date('2025-11-01')
    },
    {
      id: '678901',
      imageUrl: 'http://localhost:3000/images/concert.png',
      title: 'Familientag im Zoo',
      description: 'Spaß und Abenteuer für die ganze Familie mit spannenden Tierbegegnungen. Spaß und Abenteuer für die ganze Familie mit spannenden Tierbegegnungen.',
      location: 'Leipzig',
      distanceKm: 30,
      date: new Date('2025-08-30')
    },
    {
      id: '678902',
      imageUrl: 'http://localhost:3000/images/concert.png',
      title: 'Erföffnungsspiel',
      description: 'Schaut euch das Eröffnungsspiel des Karlsruher SC an.',
      location: 'Karlsruhe',
      distanceKm: 30,
      date: new Date('2025-09-30')
    }
];

let users = [
  { id: '9134', firstName: 'Joe', lastName: 'Doe', avatarUrl: 'http://localhost:3000/images/person.png', email:'peter.mustermann@example.com', phone: '+49 123 456789', birthDate: new Date('1997-09-30'), description: 'Ich bin leidenschaftlicher Musiker und reise gerne. In meiner Freizeit spiele ich Gitarre und genieße es, neue Orte zu entdecken.' },
  { id: '9222', firstName: 'Anna', lastName: 'Doe', avatarUrl: 'http://localhost:3000/images/person.png', email:'peter.mustermann@example.com', phone: '+49 123 456789', birthDate: new Date('2001-06-01'), description: 'Ich liebe Konzerte und neue Events zu erkunden!' }
];

let favorites = [
  { userId: '9134', eventId: '123456' },
  { userId: '9134', eventId: '1234567' },
  { userId: '9222', eventId: '678901' }
];

// --- Routes ---

app.get('/events', (req, res) => {
  const userId = req.query.userId;
  const eventsWithFav = events.map(e => ({
    ...e,
    isFavorite: favorites.some(f => f.userId === userId && f.eventId === e.id)
  }));
  res.json(eventsWithFav);
});

app.get('/events/:id', (req, res) => {
  const event = events.find(e => e.id === req.params.id);
  if (!event) return res.status(404).json({ message: 'Event not found' });
  res.json(event);
});

app.post('/favorites', (req, res) => {
  const { userId, eventId } = req.body;
  if (!favorites.some(f => f.userId === userId && f.eventId === eventId)) {
    favorites.push({ userId, eventId });
  }
  res.json({ message: 'Favorit hinzugefügt' });
});

app.delete('/favorites', (req, res) => {
  const { userId, eventId } = req.body;
  favorites = favorites.filter(f => !(f.userId === userId && f.eventId === eventId));
  res.json({ message: 'Favorit entfernt' });
});

app.get('/favorites/users/:userId', (req, res) => {
  const { userId } = req.params;
  const favEvents = favorites.filter(f => f.userId === userId).map((event) => event.eventId);
  res.json({ favorites: favEvents });
});

app.get('/users/:userId/favorites', (req, res) => {
  const userId = req.params.userId;

  const userExists = users.some(u => u.id === userId);
  if (!userExists) return res.status(404).json({ message: 'User not found' });

  const userFavEvents = events
    .filter(e => favorites.some(f => f.userId === userId && f.eventId === e.id))
    .map(e => ({ ...e, isFavorite: true }));

  res.json(userFavEvents);
});

app.post('/favorites/users/:userId/:eventId', (req, res) => {
  const userId = req.params.userId;
  const eventId = req.params.eventId;
  console.log(userId, ':', eventId);
  if (!favorites.some(f => f.userId === userId && f.eventId === eventId)) {
    favorites.push({ userId, eventId });
  }
  res.json({ message: 'Favorit hinzugefügt' });
});

app.delete('/favorites/users/:userId/:eventId', (req, res) => {
  const userId = req.params.userId;
  const eventId = req.params.eventId;
  console.log('Delete:', userId, ':', eventId);
  favorites = favorites.filter(f => !(f.userId === userId && f.eventId === eventId));
  res.json({ message: 'Favorit entfernt' });
});

app.get('/users/:id', (req, res) => {
  const user = users.find(e => e.id === req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mock backend läuft auf http://localhost:${PORT}`);
});
