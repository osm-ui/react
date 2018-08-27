import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

import { isOverflowYHidden } from 'helpers/dom';

const StyledDiv = styled.div`
  height: 100%;
  color: ${props => props.theme.color};

  & > div {
    height: 100%;
    overflow: scroll;
  }

  &::before,
  &::after {
    font-family: 'Font Awesome 5 Free';
    font-size: 0.8rem;
    position: absolute;
    left: ${props => (props.position === 'left' ? '3px' : 'unset')};
    right: ${props => (props.position === 'right' ? '3px' : 'unset')};
    z-index: 1000;

    font-weight: 900;
  }

  &.up::before {
    content: '\f106';
    top: 0;
  }

  &.down::after {
    content: '\f107';
    bottom: 0;
  }
`;

class Scrollable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayUp: false,
      displayDown: false
    };

    this.checkScroll = this.checkScroll.bind(this);

    this.scrollable = React.createRef();
  }

  componentDidMount() {
    this.checkScroll();
  }

  componentDidUpdate(prevProps) {
    if (this.props.children.length !== prevProps.children.length)
      this.checkScroll();
  }

  checkScroll() {
    const element = this.scrollable.current;

    if (element && isOverflowYHidden(element)) {
      const hasMoreDown =
        element.scrollHeight - element.scrollTop - element.clientHeight > 1; // can't put 0 here, because sometimes the calculation is imprecise
      const hasMoreUp = element.scrollTop > 0;

      this.setState({
        displayUp: hasMoreUp,
        displayDown: hasMoreDown
      });
    }
  }

  render() {
    const { displayUp, displayDown } = this.state;
    const { className, position, children } = this.props;
    const classes = classnames(displayUp && 'up', displayDown && 'down');

    return (
      <StyledDiv className={classes} position={position}>
        <div
          className={className}
          ref={this.scrollable}
          onScroll={this.checkScroll}
        >
          {children}
        </div>
      </StyledDiv>
    );
  }
}

Scrollable.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  position: PropTypes.oneOf(['right', 'left'])
};

Scrollable.defaultProps = {
  className: '',
  position: 'left'
};

Scrollable.displayName = 'Scrollable';
Scrollable.style = StyledDiv;

export default Scrollable;
