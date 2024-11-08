import React, { useEffect, useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { fetchActivities } from '../../utils/utils';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface Activity {
  id: number;
  name: string;
  distance: number;
  start_date: string;
  type: string;
}

const RunningActivitiesCalendar: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchAndFormatActivities = async () => {
      const storedToken = localStorage.getItem('strava_access_token');
      if (storedToken) {
        const activities = await fetchActivities(storedToken);

        // Filter and map activities to calendar event format
        const runningEvents = activities
          .filter((activity: Activity) => activity.type === 'Run')
          .map((activity: Activity) => ({
            id: activity.id,
            title: `${activity.name} - ${Math.round(
              activity.distance / 1000
            )} km`,
            start: new Date(activity.start_date),
            end: new Date(activity.start_date),
          }));

        setEvents(runningEvents);
      }
    };

    fetchAndFormatActivities();
  }, []);

  return (
    <div className="calendar-container">
      <h1>Running Activities Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, margin: '20px' }}
        views={['month', 'week', 'day']}
      />
    </div>
  );
};

export default RunningActivitiesCalendar;
