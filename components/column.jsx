import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { Divider, Container, Sidebar, Segment, Header } from 'semantic-ui-react';


const StyledSidebar = styled(Sidebar)`
    &&&& {
        color: ${props => props.theme.color};
        background: ${props => props.theme.backgroundColor};
        border-color: ${props => props.theme.borderColor};
        border-style: ${props => props.theme.borderStyle};
        border-width: 0;
    }

    &&&&.left {
        border-right-width: ${props => props.theme.borderWidth};
    }

    &&&&.right {
        border-left-width: ${props => props.theme.borderWidth};
    }

    .ui.header {
        color: ${props => props.theme.color};
    }

    &&&& .ui.divider {
        border-top-color: ${props => props.theme.dividerColor};
        border-bottom-color: transparent;
        margin-top: 0;
        margin-left: -1em;
        margin-right: -1em;
    }
`;


const Column = (props) => {
    const {
        title,
        ...rest
    } = props;

    return (
        <StyledSidebar as={Segment} width="very wide" animation="overlay" basic {...rest}>
            <Header as="h2">{props.title}</Header>
            <Divider section />
            <Container>
                {props.children}
            </Container>
        </StyledSidebar>
    );
};


Column.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

Column.defaultProps = {
};


export default Column;
