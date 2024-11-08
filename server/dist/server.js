"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
// env file
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// import routes
const strava_1 = __importDefault(require("./routes/strava"));
const app = (0, express_1.default)();
const PORT = 5858;
// Middleware to log when a user connects
app.use((req, res, next) => {
    console.log('A user has connected');
    next();
});
console.log('APP_URL:', process.env.APP_URL);
app.use((0, cors_1.default)({
    origin: process.env.APP_URL || 'http://localhost:3000',
    credentials: true,
}));
// Middleware to parse JSON bodies
app.use(express_1.default.json());
const STRAVA_CONFIG = {
    CLIENT_ID: process.env.STRAVA_CLIENT_ID,
    CLIENT_SECRET: process.env.STRAVA_CLIENT_SECRET,
    REDIRECT_URI: process.env.STRAVA_REDIRECT_URI,
    AUTH_URL: process.env.STRAVA_AUTH_URL,
};
app.post('/exchange_token', async (req, res) => {
    const { code } = req.body;
    if (!code) {
        return res.status(400).json({ error: 'Authorization code is required' });
    }
    try {
        // Make a request to the Strava API to exchange the authorization code
        const response = await axios_1.default.post(STRAVA_CONFIG.AUTH_URL, null, {
            params: {
                client_id: STRAVA_CONFIG.CLIENT_ID,
                client_secret: STRAVA_CONFIG.CLIENT_SECRET,
                code: code,
                grant_type: 'authorization_code',
            },
        });
        // Extract relevant data from Strava’s response
        const { access_token, refresh_token, expires_at } = response.data;
        // Send data back to the client
        res.json({
            access_token,
            refresh_token,
            expires_at,
        });
    }
    catch (error) {
        console.error('Error exchanging token with Strava:');
        res.status(500).json({ error: 'Failed to exchange token with Strava' });
    }
});
app.use('/api/strava', strava_1.default);
// Route to handle root URL
// Define a route for the root URL ('/')
app.get('*', (req, res) => {
    // Log a message when a user connects to the root URL
    console.log('A user has connected to the root URL');
    res.send('Hello, world');
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 🤘`);
});
