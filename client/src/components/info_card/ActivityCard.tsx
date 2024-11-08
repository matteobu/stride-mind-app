import React from 'react';
import './ActivityCard.css';

interface Activity {
  name: string;
  start_date_local: string;
  sport_type: string;
  distance: number;
  moving_time: number;
  total_elevation_gain: number;
  average_speed: number;
  kudos_count: number;
  comment_count: number;
}

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const {
    name,
    start_date_local,
    sport_type,
    distance,
    moving_time,
    total_elevation_gain,
    average_speed,
    kudos_count,
    comment_count,
  } = activity;

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleString();
  const formatDistance = (dist: number) => (dist / 1000).toFixed(2) + ' km';
  const formatTime = (seconds: number) =>
    `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
  const formatSpeed = (speed: number) => (speed * 3.6).toFixed(1) + ' km/h';

  return (
    <div className="activity-card">
      <h2 className="activity-name">{name}</h2>
      <p className="activity-date">{formatDate(start_date_local)}</p>
      <p className="activity-type">{sport_type}</p>
      <div className="activity-stats">
        <div className="stat">
          <span className="stat-label">Distance:</span>{' '}
          {formatDistance(distance)}
        </div>
        <div className="stat">
          <span className="stat-label">Time:</span> {formatTime(moving_time)}
        </div>
        <div className="stat">
          <span className="stat-label">Elevation Gain:</span>{' '}
          {total_elevation_gain} m
        </div>
        <div className="stat">
          <span className="stat-label">Avg Speed:</span>{' '}
          {formatSpeed(average_speed)}
        </div>
      </div>
      <div className="activity-social">
        <span className="kudos">Kudos: {kudos_count}</span>
        <span className="comments">Comments: {comment_count}</span>
      </div>
    </div>
  );
};

export default ActivityCard;
