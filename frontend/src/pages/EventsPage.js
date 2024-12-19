import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchEvents } from '../store/events-actions';
import EventsList from '../components/EventsList';

function EventsPage() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return <EventsList events={events} />;
}

export default EventsPage;
