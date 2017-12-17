import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: ${props => props.spinnerSize}px;
  height: ${props => props.spinnerSize}px;
  margin: 0 auto;
  border-width: ${props => props.strokeSize}px;
  border-style: solid;
  border-color: ${props => props.theme.loaderColor};
  border-radius: 50%;
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-right-color: transparent;
  animation: ${rotate360} 650ms infinite linear;
`;

const Wrapper = styled.div`
  text-align: center;

  &.centered {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Label = styled.div`
  color: ${props => props.theme.loaderColor};
  margin-top: 15px;
`;

const Loader = ({
  centered,
  spinnerSize,
  strokeSize,
  label,
  className,
  ...rest
}) => {
  const classes = classnames(className, {
    centered
  });

  return (
    <Wrapper className={classes} {...rest}>
      <div>
        <Spinner spinnerSize={spinnerSize} strokeSize={strokeSize} />
        {label && <Label>{label}</Label>}
      </div>
    </Wrapper>
  );
};

Loader.propTypes = {
  centered: PropTypes.bool,
  spinnerSize: PropTypes.number,
  strokeSize: PropTypes.number,
  label: PropTypes.string,
  className: PropTypes.string
};

Loader.defaultProps = {
  centered: false,
  spinnerSize: 40,
  strokeSize: 3,
  label: '',
  className: ''
};

Loader.displayName = 'components/Loader';

export default Loader;
