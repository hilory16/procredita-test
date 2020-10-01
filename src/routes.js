import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Layout from './hoc/layout';
import Loading from './components/Loader';


const Index = Loadable({
    loader: () => import('./pages/Index'),
    loading: Loading,
});



const Routes = (props) => {
    return (
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Index}/>
                </Switch>
            </BrowserRouter>
        </Layout>
    )
}

export default Routes;