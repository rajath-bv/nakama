export const baseURL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:5001/'
        : 'https://nakama-api.herokuapp.com/';
