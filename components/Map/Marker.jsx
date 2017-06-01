import React from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
import { Marker } from 'react-leaflet';
import { injectGlobal } from 'styled-components';

import shape1 from './assets/markers/1.svg';
import shape2 from './assets/markers/2.svg';
import shape3 from './assets/markers/3.svg';


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

    .osm-ui-react-marker-shape-shape1,
    .osm-ui-react-marker-shape-shape2,
    .osm-ui-react-marker-shape-shape3 {
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
    shape1,
    shape2,
    shape3,
};
const shapeNames = Object.keys(shapes);


const MapMarker = ({
    shape,
    position,
    icon,
    // iconType,
}) => (
    <Marker
        position={position}
        icon={
            L.divIcon({
                className: `osm-ui-react-marker-shape osm-ui-react-marker-shape-${shape}`,
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
    shape: PropTypes.oneOf(shapeNames),
    icon: PropTypes.string,
    // iconType: PropTypes.oneOf(['font-awesome']),
};

MapMarker.defaultProps = {
    shape: shapeNames[0],
    icon: null,
    // iconType: 'font-awesome',
};

MapMarker.displayName = 'Map.Marker';

export default MapMarker;
