import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Titlebar from 'components/Titlebar';
import Suggestion from './Suggestion';
import { formatOsmTags, formatDeletedTags, fixOsmTags } from 'helpers/osmose';
import { osmoseSuggestionTypes as types } from 'constants/index';

const StyledDiv = styled.div`
  position: relative;

  color: black;
  height: 90vh;
  background-color: ${props => props.theme.backgroundColor};

  & > div {
    height: 100%;
    padding-bottom: 2rem;
    padding-top: ${props => props.theme.titlebar.lgHeight};
    overflow-y: scroll;
  }

  h3 {
    text-align: center;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

class Osmose extends React.PureComponent {
  constructor(props) {
    super(props);

    this.renderOptions = this.renderOptions.bind(this);
  }

  renderOptions(data) {
    if (!data.elems) return null;

    const osmData = data.elems.length > 0 ? data.elems[0] : null;

    if (osmData) {
      // const osmId = osmData ? osmData.id : null;
      // const osmType = osmData ? osmData.type : null;
      const osmTags = osmData ? osmData.tags : [];
      const fixes = osmData ? osmData.fixes : [];

      const formattedTags = formatOsmTags(osmTags);

      return (
        <div>
          <Suggestion
            type={types.ORIGINAL}
            osm={osmTags}
            handleClick={() =>
              this.props.handleSuggestion(formattedTags, formattedTags)
            }
            key={0}
          />
          {fixes.map(fix => (
            <Suggestion
              type={types.MODIFICATION}
              number={fix.num + 1}
              fixes={formatDeletedTags(fix, osmTags)}
              handleClick={() =>
                this.props.handleSuggestion(
                  fixOsmTags(osmTags, fix),
                  formattedTags
                )
              }
              key={fix.num + 1}
            />
          ))}
        </div>
      );
    }

    if (!data.new_elems) return null;

    const newData = data.new_elems.length > 0 ? data.new_elems[0] : null;

    if (!newData) return null;

    return (
      <div>
        <Suggestion
          type={types.NEW}
          fixes={newData}
          handleClick={() =>
            this.props.handleSuggestion(formatOsmTags(newData.add))
          }
          className="new"
        />
      </div>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <StyledDiv>
        {data.title && <Titlebar size="sm">{data.title}</Titlebar>}
        <div>
          {data.subtitle && <h3>{data.subtitle}</h3>}
          {this.renderOptions(data)}
        </div>
      </StyledDiv>
    );
  }
}

Osmose.propTypes = {
  data: PropTypes.object.isRequired,
  handleSuggestion: PropTypes.func.isRequired,
  className: PropTypes.string
};

Osmose.defaultProps = {
  className: ''
};

Osmose.displayName = 'Osmose';

export default Osmose;
