import express from 'express';

const router = express.Router();

// Strava User Activities
router.get('/activities', async (req, res) => {
  // Extract token from "Bearer {token}"
  const accessToken = req.headers.authorization?.split(' ')[1];
  if (!accessToken) {
    return res.status(401).json({ error: 'Access token missing or invalid' });
  }

  // Math for the time period
  const before = Math.floor(Date.now() / 1000);
  const after = before - 30 * 24 * 60 * 60;

  const url = `https://www.strava.com/api/v3/athlete/activities?before=${before}&after=${after}&page=1&per_page=10`;
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Failed to fetch activities');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching activities:', error);
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
});

export default router;
