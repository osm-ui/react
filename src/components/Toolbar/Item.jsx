import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import Loader from 'components/Loader';

const StyledButton = styled.button`
  &,
  &.btn {
    position: relative;
    transition: all 0.1s ease-out;

    pointer-events: all;
    color: ${p => p.theme.toolbar.button.color};
    border-color: ${p => p.theme.toolbar.button.backgroundColor};
    border-style: ${p => p.theme.toolbar.button.borderStyle};
    border-width: ${p => p.theme.toolbar.button.borderWidth};
    background: ${p => p.theme.toolbar.button.backgroundColor};
    font-weight: 500;
    padding: 0;
    box-shadow: ${p => p.theme.toolbar.boxShadow};
  }

  &.shape-square {
    border-radius: ${p => p.theme.toolbar.button.borderRadius};
  }

  &.shape-round {
    border-radius: 50%;
  }

  &.xs {
    width: ${p => p.theme.toolbar.xsSize};
    height: ${p => p.theme.toolbar.xsSize};
    line-height: ${p => p.theme.toolbar.xsLineHeight};
    font-size: ${p => p.theme.toolbar.xsFontSize};

    .fa {
      font-size: ${p => p.theme.toolbar.xsIconSize};
    }
  }

  &.sm {
    width: ${p => p.theme.toolbar.smSize};
    height: ${p => p.theme.toolbar.smSize};
    line-height: ${p => p.theme.toolbar.smLineHeight};
    font-size: ${p => p.theme.toolbar.smFontSize};

    .fa {
      font-size: ${p => p.theme.toolbar.smIconSize};
    }
  }

  &.md {
    width: ${p => p.theme.toolbar.mdSize};
    height: ${p => p.theme.toolbar.mdSize};
    line-height: ${p => p.theme.toolbar.mdLineHeight};
    font-size: ${p => p.theme.toolbar.mdFontSize};

    .fa {
      font-size: ${p => p.theme.toolbar.mdIconSize};
    }
  }

  &.lg {
    width: ${p => p.theme.toolbar.lgSize};
    height: ${p => p.theme.toolbar.lgSize};
    line-height: ${p => p.theme.toolbar.lgLineHeight};
    font-size: ${p => p.theme.toolbar.lgFontSize};

    .fa {
      font-size: ${p => p.theme.toolbar.lgIconSize};
    }
  }

  &.in-group {
    box-shadow: none;
  }

  &.btn:hover {
    color: ${p => p.theme.toolbar.button.color};
    background-color: ${p => p.theme.toolbar.button.hoverBackgroundColor};
    border-color: ${p => p.theme.toolbar.button.hoverBorderColor};
  }

  &.btn:focus {
    color: ${p => p.theme.toolbar.button.color};
    background-color: ${p => p.theme.toolbar.button.focusBackgroundColor};
    border-color: ${p => p.theme.toolbar.button.focusBorderColor};
    outline: none;
  }

  &.btn:active {
    color: ${p => p.theme.toolbar.button.color};
    background-color: ${p => p.theme.toolbar.button.activeBackgroundColor};
    border-color: ${p => p.theme.toolbar.button.activeBorderColor};
  }
`;

const StyledDiv = StyledButton.extend`
  pointer-events: none;
`;

const StyledAnchor = StyledButton.extend`
  font-weight: 500;
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
    'in-group': inGroup
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
      lg: 30
    };
    const strokeSizes = {
      xs: 2,
      sm: 3,
      md: 3,
      lg: 3
    };
    return (
      <Element size={size} className={classes} {...rest}>
        <Loader
          spinnerSize={spinnerSizes[size]}
          strokeSize={strokeSizes[size]}
          centered
        />
      </Element>
    );
  }

  return (
    <Element size={size} className={classes} {...rest}>
      {children && children}
      {!children && <FontAwesome name={icon} fixedWidth />}
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
  children: PropTypes.node
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
  children: ''
};

ToolbarItem.displayName = 'Toolbar.Item';

export default ToolbarItem;
