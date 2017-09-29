import React from 'react';
import success from './success.scss';

export default class Success extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <p>Pago realizado con éxito</p>
        );
    }
}
