import useEventDataFetching from '@/hooks/useFetchEvents';
import Login from '../components/Login';

const EventList = () => {
  const events = useEventDataFetching();

  return (
    <div>
      <h1>Event List</h1>
      {events.length === 0 ? (
        <Login />
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>{event.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;