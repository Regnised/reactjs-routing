import EventItem from '../components/EventItem';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function EventDetailPage() {
  const params = useParams();
  console.log(params.eventId);
  const events = useSelector((state) => state.items);

  const event = events.find((e) => e.id === params.eventId);
  console.log(event);

  return <EventItem event={event} method="PATCH" />;
}

export default EventDetailPage;
