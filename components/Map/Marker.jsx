import React from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
import { Marker } from 'react-leaflet';
import { injectGlobal } from 'styled-components';

import pointerClassic from './assets/markers/pointerClassic.svg';
import pointerClassicThin from './assets/markers/pointerClassicThin.svg';
import pointerCirclePin from './assets/markers/pointerCirclePin.svg';


/* eslint-disable no-unused-expressions */
injectGlobal`
    .osm-ui-react-marker-shape {
        width: 50px !important;
        height: 50px !important;

        svg {
            position: absolute;
            z-index: 1;
        }

        .osm-ui-react-marker-icon-wrapper {
            width: 50px;
            height: 50px;
            position: absolute;
            z-index: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: visible;
            font-size: 19px;
        }
    }

    .osm-ui-react-marker-pointerClassic,
    .osm-ui-react-marker-pointerClassicThin,
    .osm-ui-react-marker-pointerCirclePin {
        svg {
            top: -20px;
            left: 0;
        }

        .osm-ui-react-marker-icon-wrapper {
            top: -23px;
            left: 0;
        }
    }
`;
/* eslint-enable */

const shapes = {
    pointerClassic,
    pointerClassicThin,
    pointerCirclePin,
};
const shapeNames = Object.keys(shapes);


const MapMarker = ({
    theme,
    shape,
    position,
    icon,
    // iconType,
}) => (
    <Marker
        position={position}
        icon={
            L.divIcon({
                className: `osm-ui-react-marker-shape osm-ui-react-marker-${theme} osm-ui-react-marker-${shape}`,
                html: `
                    ${shapes[shape]}
                    <div class="osm-ui-react-marker-icon-wrapper">
                        <i class="fa fa-${icon}"></i>
                    </div>
                `,
            })
        }
    />
);

MapMarker.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    theme: PropTypes.string,
    shape: PropTypes.oneOf(shapeNames),
    icon: PropTypes.string,
    // iconType: PropTypes.oneOf(['font-awesome']),
};

MapMarker.defaultProps = {
    theme: 'default',
    shape: shapeNames[0],
    icon: null,
    // iconType: 'font-awesome',
};

MapMarker.displayName = 'Map.Marker';

export default MapMarker;
