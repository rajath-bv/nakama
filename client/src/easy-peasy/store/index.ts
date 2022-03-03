import { createStore, persist } from 'easy-peasy';
import { logIn, logOut } from '../actions/auth';
import initStore from './initalStore';

const store = createStore(
    persist({
        auth: {
            loggedIn: initStore.loggedIn,
            logIn: logIn,
            logOut: logOut,
        },
    }, 
    { storage: 'localStorage' }
));

export default store;
