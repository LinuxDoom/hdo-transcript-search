import React, { Component } from 'react';
import FluxComponent  from 'flummox/component';
import {RouteHandler} from 'react-router';

import Header        from './Header';
import SharingLinks  from './SharingLinks';
import Footer        from './Footer';

export default class App extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            title: document.body.getAttribute('data-title'),
            desc: document.body.getAttribute('data-description'),
            fbId: document.body.getAttribute('data-facebook-app-id')
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} description={this.state.desc}>
                    <FluxComponent connectToStores={['summary']}>
                        <SharingLinks facebookAppId={this.state.fbId} />
                    </FluxComponent>
                </Header>

                <RouteHandler />

                <Footer/>
            </div>
        );
    }
}

