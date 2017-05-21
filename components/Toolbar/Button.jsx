import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import Loader from '../Loader';


const StyledButton = styled.button`
    position: relative;
    transition: all 0.1s ease-out;

    color: ${props => props.theme.toolbar.button.color};
    border-color: ${props => props.theme.toolbar.button.borderColor};
    border-style: ${props => props.theme.toolbar.button.borderStyle};
    border-width: ${props => props.theme.toolbar.button.borderWidth};
    background: ${props => props.theme.toolbar.button.backgroundColor};
    padding: 0;

    &:hover {
        color: ${props => props.theme.toolbar.button.color};
        background-color: ${props => props.theme.toolbar.button.hoverBackgroundColor};
        border-color: ${props => props.theme.toolbar.button.hoverBorderColor};
    }

    &:focus {
        color: ${props => props.theme.toolbar.button.color};
        background-color: ${props => props.theme.toolbar.button.focusBackgroundColor};
        border-color: ${props => props.theme.toolbar.button.focusBorderColor};
    }

    &:active, .active {
        color: ${props => props.theme.toolbar.button.color};
        background-color: ${props => props.theme.toolbar.button.activeBackgroundColor};
        border-color: ${props => props.theme.toolbar.button.activeBorderColor};
    }

    &.shape-square {
        border-radius: 0;
    }

    &.shape-round {
        border-radius: 50%;
    }

    &.xs {
        width: ${props => props.theme.toolbar.xsSize};
        height: ${props => props.theme.toolbar.xsSize};
        font-size: 0.85em;
        line-height: 0.85em;
    }

    &.sm {
        width: ${props => props.theme.toolbar.smSize};
        height: ${props => props.theme.toolbar.smSize};
        font-size: 1.08em;
        line-height: 1.08em;
    }

    &.md {
        width: ${props => props.theme.toolbar.mdSize};
        height: ${props => props.theme.toolbar.mdSize};
        font-size: 1.29em;
        line-height: 1.29em;
    }

    &.lg {
        width: ${props => props.theme.toolbar.lgSize};
        height: ${props => props.theme.toolbar.lgSize};
        font-size: 1.43em;
        line-height: 1.43em;
    }
`;


const ToolbarButton = ({
    // title,
    icon,
    size,
    shape,
    loading,
    // loaderTitle,
    className,
    children,
    ...rest
}) => {
    const classes = classnames(className, {
        loading,
        [size]: size,
        [`shape-${shape}`]: true,
        btn: true,
    });

    if (loading) {
        const spinnerSizes = {
            xs: 14,
            sm: 20,
            md: 24,
            lg: 30,
        };
        const strokeSizes = {
            xs: 2,
            sm: 3,
            md: 3,
            lg: 3,
        };
        return (
            <StyledButton
                className={classes}
                {...rest}
            >
                <Loader
                    spinnerSize={spinnerSizes[size]}
                    strokeSize={strokeSizes[size]}
                    centered
                />
            </StyledButton>
        );
    }

    return (
        <StyledButton
            className={classes}
            {...rest}
        >
            {children && children}
            {!children && <FontAwesome name={icon} />}
        </StyledButton>
    );
};


ToolbarButton.propTypes = {
    // title: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    shape: PropTypes.oneOf(['round', 'square']),
    loading: PropTypes.bool,
    // loaderTitle: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node,
};

ToolbarButton.defaultProps = {
    // title: '',
    icon: '',
    size: 'md',
    shape: 'round',
    loading: false,
    // loaderTitle: '',
    className: '',
    children: '',
};

ToolbarButton.displayName = 'Toolbar.Button';

export default ToolbarButton;
