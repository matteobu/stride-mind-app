export interface Runner {
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
