import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';


const StyledSection = styled.section`
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};

    & > * {
        opacity: ${props => (props.dimmed ? 0.2 : 1)};
    }

    &.app-canvas {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
`;


const Section = ({ appCanvas, className, ...props }) => {
    const classes = classnames(className, {
        'app-canvas': appCanvas,
    });

    return (
        <StyledSection className={classes} {...props} />
    );
};


Section.propTypes = {
    appCanvas: PropTypes.bool,
    dimmed: PropTypes.bool,
    className: PropTypes.string,
};

Section.defaultProps = {
    appCanvas: false,
    dimmed: false,
    className: '',
};

Section.displayName = 'Section';

export default Section;
