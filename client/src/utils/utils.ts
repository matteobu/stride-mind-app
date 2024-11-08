export const fetchUserData = async (accessToken: string) => {
  try {
    const response = await fetch('https://www.strava.com/api/v3/athlete', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 401) {
      redirectToStravaAuth();
      return;
    } else {
      return await response.json();
    }
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  }
};

export const fetchActivities = async (accessToken: string) => {
  console.log('fetching activities');
  try {
    const response = await fetch(
      'http://localhost:5858/api/strava/activities',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) throw new Error('Failed to fetch activities');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching activities:', error);
  }
};

export const redirectToStravaAuth = () => {
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const redirect_url = process.env.REACT_APP_REDIRECT_URL;
  console.log({ client_id, redirect_url });
  const stravaAuthUrl = `https://www.strava.com/oauth/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_url}&scope=read,activity:read_all&approval_prompt=auto`;

  window.location.href = stravaAuthUrl;
};

// Handle Runner Data and Activities
export const handleRunnerData = async (storedToken: string) => {
  try {
    if (storedToken) {
      // const userData = await fetchUserData(storedToken);
      // setRunnerData(userData);
      // dispatch(setRunnerInstance(userData));

      // const activities = await fetchActivities(storedToken);
      // console.log(activities);
      // setRunnerActivities(activities);
    }
  } catch (error) {
    console.error('Error fetching runner data:', error);
  }
};
