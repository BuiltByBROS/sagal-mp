import React from 'react';
import error from './failure.scss';

export default class Failure extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <p>Ha ocurrido un error inesperado</p>
        );
    }
}
