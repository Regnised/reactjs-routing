import { Link } from 'react-router-dom';
import classes from './EventItem.module.css';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteEvent } from '../store/events-actions';

function EventItem({ event }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function startDeleteHandler() {
    dispatch(deleteEvent(event.id));
    navigate('..', { relative: 'path' });
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>ID: {event.id}</p>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
