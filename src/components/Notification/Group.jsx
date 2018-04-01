import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

const StyledAside = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 50rem;
  @media (max-width: 50rem) {
    width: 100%;
  }

  &:empty {
    padding-top: 0;
    padding-bottom: 0;
  }

  &.position-top-right {
    top: 0;
    right: 0;
    justify-content: flex-end;
  }

  &.position-top-left {
    top: 0;
    left: 0;
    justify-content: flex-start;
  }

  &.position-bottom-right {
    bottom: 0;
    right: 0;
    justify-content: flex-end;
    flex-direction: column-reverse;
  }

  &.position-bottom-left {
    bottom: 0;
    left: 0;
    justify-content: flex-start;
    flex-direction: column-reverse;
  }

  &.position-top {
    top: 0;
    left: 0;
    right: 0;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  &.position-bottom {
    bottom: 0;
    left: 0;
    right: 0;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column-reverse;
  }

  & .notif-item {
    position: relative;
    width: 100%;
  }
`;
const NotificationGroup = ({
  position,
  direction,
  className,
  children,
  ...rest
}) => {
  const asideClasses = classnames(className, {
    [`position-${position}`]: true,
    [`direction-${direction}`]: true
  });

  return (
    <StyledAside key="notification-group" className={asideClasses} {...rest}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          className: 'notif-item',
          direction
        })
      )}
    </StyledAside>
  );
};

NotificationGroup.propTypes = {
  position: PropTypes.oneOf([
    'top-left',
    'top-right',
    'bottom-right',
    'bottom-left',
    'top',
    'bottom'
  ]),
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

NotificationGroup.defaultProps = {
  position: 'top-right',
  direction: 'horizontal',
  className: ''
};

NotificationGroup.displayName = 'Notification.Group';

export default NotificationGroup;
