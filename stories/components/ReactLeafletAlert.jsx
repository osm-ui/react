import React from 'react';
import { Alert } from '../../index';


const ReactLeafletAlert = () => (
    <Alert context="info">
        This component is based on the great <a href="https://github.com/PaulLeCam/react-leaflet">react-leaflet</a> module so you can use all its inner components/props.
    </Alert>
);

ReactLeafletAlert.displayName = 'ReactLeafletAlert';

export default ReactLeafletAlert;
