// components/StravaAuth/StravaAuth.tsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StravaAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get('code');
    console.log({ authCode });
    if (authCode) {
      // Send authCode to the server to exchange for tokens
      fetch('http://localhost:5858/exchange_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ code: authCode }),
      })
        .then(async (response) => {
          if (!response.ok) {
            const text = await response.text();
            throw new Error(`Error exchanging token: ${text}`);
          }
          return response.json();
        })
        .then((data) => {
          localStorage.setItem('strava_access_token', data.access_token);
          // Optionally navigate the user to the main app or a dashboard
          navigate('/');
        })
        .catch((error) => console.error('Error exchanging token:', error));
    }
  }, [navigate]);

  return <div>Authenticating with Strava...</div>;
};

export default StravaAuth;
