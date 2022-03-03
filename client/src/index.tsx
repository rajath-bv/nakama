import 'antd/dist/antd.css';
import { StoreProvider, useStoreRehydrated } from 'easy-peasy';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import history from './helpers/history';
import './styles/index.css';
import Dashboard from './views/Dashboard';
import LandingPage from './views/Landing';
import SignIn from './views/SignIn';
import './styles/index.css';
import SignUp from './views/SignUp';
import store from './easy-peasy/store';
import Footer from './components/Footer/index';

const WaitForStateRehydration = ({ children }: { children: any }) => {
    const isRehydrated = useStoreRehydrated();
    return isRehydrated ? children : null;
};

const Index = () => {
    return (
        <StoreProvider store={store}>
            <WaitForStateRehydration>
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={LandingPage} />
                        <Route path="/dashboard" exact component={Dashboard} />
                        <Route path="/signin" exact component={SignIn} />
                        <Route path="/signup" exact component={SignUp} />
                        <Footer />
                    </Switch>
                </Router>
            </WaitForStateRehydration>
        </StoreProvider>
    );
};

ReactDOM.render(<Index />, document.querySelector('#root'));
