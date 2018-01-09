import React from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
import { Marker } from 'react-leaflet';
import { injectGlobal } from 'styled-components';

import shapes from './assets/markers';

/* eslint-disable no-unused-expressions */
injectGlobal`
    .osm-ui-react-marker-shape {
        width: 5rem !important;
        height: 5rem !important;

        svg {
            z-index: 1;
            position: absolute;
            top: 0;
            left: 0;
        }

        .osm-ui-react-marker-icon-wrapper {
            width: 5rem;
            height: 5rem;
            position: absolute;
            z-index: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: visible;
            font-size: 1.9rem;
        }
    }

    .osm-ui-react-marker-pointerClassic,
    .osm-ui-react-marker-pointerClassicThin,
    .osm-ui-react-marker-pointerCirclePin {
        svg {
            top: -2rem;
            left: 0;
        }

        .osm-ui-react-marker-icon-wrapper {
            top: -2.3rem;
            left: 0;
        }
    }

    .osm-ui-react-marker-basicCircle,
    .osm-ui-react-marker-basicSquare,
    .osm-ui-react-marker-basicUpTriangle,
    .osm-ui-react-marker-basicRightTriangle,
    .osm-ui-react-marker-basicDownTriangle,
    .osm-ui-react-marker-basicLeftTriangle,
    .osm-ui-react-marker-basicDiamond {
        .osm-ui-react-marker-icon-wrapper {
            display: none;
        }
    }
`;
/* eslint-enable */

const MapMarker = ({
  theme,
  shape,
  position,
  icon,
  // iconType,
  ...props
}) => (
  <Marker
    position={position}
    icon={L.divIcon({
      className: `osm-ui-react-marker-shape
        osm-ui-react-marker-${theme}
        osm-ui-react-marker-${shape}
      `,
      iconAnchor: shapes[shape].iconAnchor,
      html: `
                    ${shapes[shape].html}
                    <div class="osm-ui-react-marker-icon-wrapper">
                        <i class="fa fa-${icon}"></i>
                    </div>
                `
    })}
    {...props}
  />
);

const shapeNames = Object.keys(shapes);

MapMarker.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  theme: PropTypes.string,
  shape: PropTypes.oneOf(shapeNames),
  icon: PropTypes.string
  // iconType: PropTypes.oneOf(['font-awesome']),
};

MapMarker.defaultProps = {
  theme: 'default',
  shape: shapeNames[0],
  icon: null
  // iconType: 'font-awesome',
};

MapMarker.displayName = 'Map.Marker';

export default MapMarker;
