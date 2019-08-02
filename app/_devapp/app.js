

import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import { asyncComponent } from 'react-async-component';
import Button from '@material-ui/core/Button';

// /** We are importing our index.php my app Vairaible */
import myApp from 'myApp';

/* globals __webpack_public_path__ */
__webpack_public_path__ = `${window.STATIC_URL}/app/assets/bundle/`;

const Header = asyncComponent({
    resolve: () => new Promise(resolve =>
        require.ensure([], require => {
            resolve(require('./Header'));
        },
        'Header')
    )
});

class App extends Component{
    render(){
        const { user : { name, email }, logged } = myApp;
        return (
            <Fragment>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
                <Header></Header>
                    <div className="dashboard">
                    {logged &&
                        <h2 className="status">Logged In</h2>
                    }
                    <h1 className="name"> {name}</h1>
                    <p className="email">{email}</p>
                    
    
                    </div>
            </Fragment>
        );
    }
}



ReactDOM.render(<App />, document.querySelector('#app'));
