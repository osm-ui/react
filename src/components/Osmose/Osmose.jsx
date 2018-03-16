import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Titlebar from 'components/Titlebar';
import Suggestion from './Suggestion';

const StyledDiv = styled.div`
  position: relative;

  color: black;
  border-width: ${props => props.theme.borderWidth};
  border-style: ${props => props.theme.borderStyle};
  border-color: ${props => props.theme.borderColor};
  height: 90vh;
  background-color: ${props => props.theme.backgroundColor};

  & > div {
    height: 100%;
    padding: 2rem;
    padding-top: ${props => props.theme.titlebar.lgHeight};
    overflow-y: scroll;
  }

  h3 {
    text-align: center;
    margin-top: 1rem;
    font-size: 2rem;
  }
`;

class Osmose extends React.PureComponent {
  formatDeletedData(fixes, osmTags) {
    return fixes.map(fix => {
      return {
        ...fix,
        del: fix.del.map(deletedTag => {
          return osmTags.find(tag => tag.k === deletedTag);
        })
      };
    });
  }

  renderOptions(data) {
    const osmData = data.elems.length > 0 ? data.elems[0] : null;

    if (osmData) {
      // const osmId = osmData ? osmData.id : null;
      // const osmType = osmData ? osmData.type : null;
      const osmTags = osmData ? osmData.tags : [];
      const fixes = osmData ? osmData.fixes : [];

      const newFixes = this.formatDeletedData(fixes, osmTags);

      return (
        <div>
          <Suggestion title="Présent dans OSM" osm={osmTags} key={0} />
          {newFixes.map(fix => (
            <Suggestion
              title={`Suggestion n°${fix.num}`}
              fixes={fix}
              key={fix.num + 1}
            />
          ))}
        </div>
      );
    }

    const newData = data.new_elems.length > 0 ? data.new_elems[0] : null;

    return (
      <div>
        <Suggestion title="Nouvelle donnée" fixes={newData} className="new" />
      </div>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <StyledDiv>
        <Titlebar size="sm">{data.title}</Titlebar>
        <div>
          <h3>{data.subtitle}</h3>
          {this.renderOptions(data)}
        </div>
      </StyledDiv>
    );
  }
}

Osmose.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
};

Osmose.defaultProps = {
  className: ''
};

Osmose.displayName = 'Osmose';

export default Osmose;
