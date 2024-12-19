import { EventsActions } from '.';

export const fetchEvents = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        throw new Error('Fetching data error!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const { events } = await fetchData();
      console.log(events);

      dispatch(EventsActions.replaceEvents(events || []));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addEvent = (event) => {
  return async (dispatch) => {
    const createEvent = async () => {
      const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        body: JSON.stringify(event),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Fetching data error!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const { event } = await createEvent();
      console.log(event);

      dispatch(EventsActions.addEvent(event || {}));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteEvent = (eventId) => {
  return async (dispatch) => {
    const createEvent = async () => {
      const response = await fetch(`http://localhost:8080/events/${eventId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Fetching data error!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const result = await createEvent();
      console.log(result);

      dispatch(EventsActions.deleteEvent(eventId));
    } catch (error) {
      console.error(error);
    }
  };
};

export const patchEvent = (eventData) => {
  return async (dispatch) => {
    const patchEvent = async () => {
      const response = await fetch(
        `http://localhost:8080/events/${eventData.id}`,
        {
          method: 'PATCH',
          body: JSON.stringify(eventData),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok) {
        throw new Error('Fetching data error!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const { event } = await patchEvent();
      console.log(event);

      dispatch(EventsActions.patchEvent(event));
    } catch (error) {
      console.error(error);
    }
  };
};
