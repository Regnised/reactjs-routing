import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEvent, patchEvent } from '../store/events-actions';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  console.log(method, event);

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let formMethod = method || 'POST';
  function cancelHandler() {
    navigate('..', { relative: 'path' });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const formData = Object.fromEntries(fd.entries());

    console.log(formData);
    if (formMethod === 'POST') {
      dispatch(addEvent(formData));
    } else if (formMethod === 'PATCH') {
      dispatch(patchEvent({ ...formData, id: params.eventId }));
    }

    navigate('..', { relative: 'path' });
  }

  return (
    <form className={classes.form} onSubmit={handleFormSubmit}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          defaultValue={(event && event.title) || ''}
          required
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          defaultValue={(event && event.image) || ''}
          required
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          defaultValue={(event && event.date) || ''}
          required
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          defaultValue={(event && event.description) || ''}
          required
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default EventForm;
