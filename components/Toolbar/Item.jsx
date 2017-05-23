import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import Loader from '../Loader';


const buildInGroupSize = (props) => {
    const size = props.theme.toolbar[`${props.size}Size`];
    const borderWidth = props.theme.toolbar.button.borderWidth;
    return `calc(${size} - (${borderWidth} * 2))`;
};

const buildCommonStyles = props => `
    position: relative;
    transition: all 0.1s ease-out;

    color: ${props.theme.toolbar.button.color};
    border-color: ${props.theme.toolbar.button.borderColor};
    border-style: ${props.theme.toolbar.button.borderStyle};
    border-width: ${props.theme.toolbar.button.borderWidth};
    background: ${props.theme.toolbar.button.backgroundColor};
    padding: 0;

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

    &.in-group {
        width: ${buildInGroupSize(props)};
        height: ${buildInGroupSize(props)};
        border-width: 0;
    }
`;

const buildActiveStyles = props => `
    &.btn:hover {
        color: ${props.theme.toolbar.button.color};
        background-color: ${props.theme.toolbar.button.hoverBackgroundColor};
        border-color: ${props.theme.toolbar.button.hoverBorderColor};

        &.in-group {
            border-color: ${props.theme.toolbar.button.hoverBackgroundColor};
        }
    }

    &.btn:focus {
        color: ${props.theme.toolbar.button.color};
        background-color: ${props.theme.toolbar.button.focusBackgroundColor};
        border-color: ${props.theme.toolbar.button.focusBorderColor};

        &.in-group {
            border-color: ${props.theme.toolbar.button.focusBackgroundColor};
        }
    }

    &.btn:active, &.btn.active {
        color: ${props.theme.toolbar.button.color};
        background-color: ${props.theme.toolbar.button.activeBackgroundColor};
        border-color: ${props.theme.toolbar.button.activeBorderColor};

        &.in-group {
            border-color: ${props.theme.toolbar.button.activeBackgroundColor};
        }
    }
`;

const buildNonButtonStyles = () => `
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
`;

const StyledButton = styled.button`
    ${props => buildCommonStyles(props)}
    ${props => buildActiveStyles(props)}
`;

const StyledDiv = styled.div`
    ${props => buildCommonStyles(props)}
    ${props => buildNonButtonStyles(props)}
    pointer-events: none;
`;

const StyledAnchor = styled.a`
    ${props => buildCommonStyles(props)}
    ${props => buildActiveStyles(props)}
    ${props => buildNonButtonStyles(props)}
`;


const ToolbarItem = ({
    // title,
    type,
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

    let Element = StyledDiv;

    if (inactive === false) {
        switch (type) {
            case 'anchor':
                Element = StyledAnchor;
                break;
            default:
                Element = StyledButton;
        }
    }

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
                size={size}
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
            size={size}
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
    type: PropTypes.oneOf(['button', 'anchor']),
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
    type: 'button',
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
