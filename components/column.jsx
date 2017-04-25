import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';


const StyledAside = styled.aside`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.2s ease-out;

    color: ${props => props.theme.color};
    background: ${props => props.theme.backgroundColor};
    border-color: ${props => props.theme.borderColor};
    border-style: ${props => props.theme.borderStyle};
    border-width: 0;

    &.xs {
        width: 150px;
    }

    &.sm {
        width: 250px;
    }

    &.md {
        width: 400px;
    }

    &.lg {
        width: 600px;
    }

    &.maximized {
        width: 100%;
    }

    &.left {
        left: 0;
        transform: translate(-150%, 0);
        border-right-width: ${props => props.theme.borderWidth};
    }

    &.right {
        right: 0;
        transform: translate(150%, 0);
        border-left-width: ${props => props.theme.borderWidth};
    }

    &.visible {
        transform: translate(0, 0);
    }
`;


const Column = (props) => {
    const {
        title,
        children,
        visible,
        // loading,
        position,
        width,
        maximized,
        ...rest
    } = props;

    const classes = classnames({
        'form-group': true,
        [position]: true,
        [width]: true,
        visible,
        maximized,
    });

    return (
        <StyledAside className={classes} {...rest}>
            <h2>{title}</h2>
            <button onClick={() => this.handleCloseClick()}>
                <i className="fa fa-close" />
            </button>
            <div className="content">
                {children}
            </div>
        </StyledAside>
    );
};


Column.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    visible: PropTypes.bool,
    // loading: PropTypes.bool,
    position: PropTypes.oneOf(['left', 'right']),
    width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    maximized: PropTypes.bool,
};

Column.defaultProps = {
    visible: false,
    // loading: false,
    position: 'left',
    width: 'md',
    maximized: false,
};

Column.displayName = 'Column';

export default Column;
