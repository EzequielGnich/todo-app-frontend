const JWT_EXPIRES_IN = import.meta.env.JWT_EXPIRES_IN;
const API_URL = import.meta.env.VITE_APP_API_URL;
const JWT_SECRET = import.meta.env.JWT_SECRET;
const TEN_MINUTES = 1000 * 60 * 10;

export { API_URL, JWT_EXPIRES_IN, JWT_SECRET, TEN_MINUTES };
