import EventForm from '../components/EventForm';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function EditEventPage() {
  const params = useParams();
  console.log(params.eventId);
  const events = useSelector((state) => state.items);

  const event = events.find((e) => e.id === params.eventId);
  console.log(event);

  return <EventForm event={event} method="PATCH" />;
}

export default EditEventPage;
