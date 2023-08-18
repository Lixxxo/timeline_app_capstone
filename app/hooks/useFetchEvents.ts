// hooks/useEventDataFetching.ts
import { useEffect, useState } from "react";
import { Event } from "../models/Event";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const useEventDataFetching = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(db, "events");
        const eventSnapshot = await getDocs(eventsCollection);
        const eventList = eventSnapshot.docs.map((doc) => doc.data() as Event);
        setEvents(eventList);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, loading}; // Return events and loading state
};

export default useEventDataFetching;


