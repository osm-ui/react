import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import Loader from '../Loader';


const buildCommonStyles = props => `
    position: relative;
    transition: all 0.1s ease-out;

    color: ${props.theme.toolbar.button.color};
    border-color: ${props.theme.toolbar.button.borderColor};
    border-style: ${props.theme.toolbar.button.borderStyle};
    border-width: ${props.theme.toolbar.button.borderWidth};
    background: ${props.theme.toolbar.button.backgroundColor};
    padding: 0;

    &.in-group {
        border-color: ${props.theme.toolbar.button.backgroundColor};
    }

    &.shape-square {
        border-radius: 0;
    }

    &.shape-round {
        border-radius: 50%;
    }

    &.xs {
        width: ${props.theme.toolbar.xsSize};
        height: ${props.theme.toolbar.xsSize};
        line-height: 0.85em;

        .fa {
            font-size: 0.85em;
        }
    }

    &.sm {
        width: ${props.theme.toolbar.smSize};
        height: ${props.theme.toolbar.smSize};
        line-height: 1.04em;

        .fa {
            font-size: 1.04em;
        }
    }

    &.md {
        width: ${props.theme.toolbar.mdSize};
        height: ${props.theme.toolbar.mdSize};
        line-height: 1.2em;

        .fa {
            font-size: 1.2em;
        }
    }

    &.lg {
        width: ${props.theme.toolbar.lgSize};
        height: ${props.theme.toolbar.lgSize};
        line-height: 1.43em;

        .fa {
            font-size: 1.43em;
        }
    }
`;

const StyledButton = styled.button`
    ${props => buildCommonStyles(props)}

    &.btn:hover {
        color: ${props => props.theme.toolbar.button.color};
        background-color: ${props => props.theme.toolbar.button.hoverBackgroundColor};
        border-color: ${props => props.theme.toolbar.button.hoverBorderColor};

        &.in-group {
            border-color: ${props => props.theme.toolbar.button.hoverBackgroundColor};
        }
    }

    &.btn:focus {
        color: ${props => props.theme.toolbar.button.color};
        background-color: ${props => props.theme.toolbar.button.focusBackgroundColor};
        border-color: ${props => props.theme.toolbar.button.focusBorderColor};

        &.in-group {
            border-color: ${props => props.theme.toolbar.button.focusBackgroundColor};
        }
    }

    &.btn:active, &.btn.active {
        color: ${props => props.theme.toolbar.button.color};
        background-color: ${props => props.theme.toolbar.button.activeBackgroundColor};
        border-color: ${props => props.theme.toolbar.button.activeBorderColor};

        &.in-group {
            border-color: ${props => props.theme.toolbar.button.activeBackgroundColor};
        }
    }
`;

const StyledDiv = styled.div`
    ${props => buildCommonStyles(props)}

    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    font-weight: 500;
`;


const ToolbarItem = ({
    // title,
    icon,
    size,
    shape,
    inactive,
    loading,
    // loaderTitle,
    inGroup,
    className,
    children,
    ...rest
}) => {
    const classes = classnames(className, {
        loading,
        [size]: size,
        [`shape-${shape}`]: true,
        btn: !inactive,
        'in-group': inGroup,
    });

    const Element = inactive === true ? StyledDiv : StyledButton;

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
            <Element
                className={classes}
                {...rest}
            >
                <Loader
                    spinnerSize={spinnerSizes[size]}
                    strokeSize={strokeSizes[size]}
                    centered
                />
            </Element>
        );
    }

    return (
        <Element
            className={classes}
            {...rest}
        >
            {children && children}
            {!children && <FontAwesome name={icon} />}
        </Element>
    );
};


ToolbarItem.propTypes = {
    // title: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    shape: PropTypes.oneOf(['round', 'square']),
    inactive: PropTypes.bool,
    loading: PropTypes.bool,
    // loaderTitle: PropTypes.node,
    inGroup: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
};

ToolbarItem.defaultProps = {
    // title: '',
    icon: '',
    size: 'md',
    shape: 'round',
    inactive: false,
    loading: false,
    // loaderTitle: '',
    inGroup: false,
    className: '',
    children: '',
};

ToolbarItem.displayName = 'Toolbar.Item';

export default ToolbarItem;
