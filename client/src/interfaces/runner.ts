interface Runner {
  id: number;
  username: string;
  resource_state: number;
  firstname: string;
  lastname: string;
  bio: string;
  city: string;
  state: string;
  country: string | null;
  sex: string;
  premium: boolean;
  summit: boolean;
  created_at: string; // Keep as string for easy serialization (ISO date)
  updated_at: string; // Keep as string for easy serialization (ISO date)
  badge_type_id: number;
  weight: number;
  profile_medium: string;
  profile: string;
  friend: string | null;
  follower: string | null;
}

interface RunnerActivity {
  resource_state: number;
  athlete: {
    id: number;
    resource_state: number;
  };
  name: string;
  distance: number; // in meters
  moving_time: number; // in seconds
  elapsed_time: number; // in seconds
  total_elevation_gain: number; // in meters
  type: string;
  sport_type: string;
  workout_type: number;
  id: number;
  start_date: string; // ISO date string
  start_date_local: string; // ISO date string in local timezone
  timezone: string;
  utc_offset: number;
  location_city: string | null;
  location_state: string | null;
  location_country: string | null;
  achievement_count: number;
  kudos_count: number;
  comment_count: number;
  athlete_count: number;
  photo_count: number;
  map: {
    id: string;
    summary_polyline: string;
    resource_state: number;
  };
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  visibility: string;
  flagged: boolean;
  gear_id: string | null;
  start_latlng: [number, number] | null;
  end_latlng: [number, number] | null;
  average_speed: number; // in meters per second
  max_speed: number; // in meters per second
  average_cadence: number;
  average_watts: number;
  max_watts: number;
  weighted_average_watts: number;
  device_watts: boolean;
  kilojoules: number;
  has_heartrate: boolean;
  average_heartrate: number;
  max_heartrate: number;
  heartrate_opt_out: boolean;
  display_hide_heartrate_option: boolean;
  elev_high: number;
  elev_low: number;
  upload_id: number;
  upload_id_str: string;
  external_id: string;
  from_accepted_tag: boolean;
  pr_count: number;
  total_photo_count: number;
  has_kudoed: boolean;
}

export type { Runner, RunnerActivity };
