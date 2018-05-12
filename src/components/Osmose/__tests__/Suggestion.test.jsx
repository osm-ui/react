import 'jest-styled-components';
import { snapshotWithElementChildren } from 'helpers/tests';
import { Osmose } from 'index';

import fixData from '../../../../stories/mocks/osmose_fix.json';
import newData from '../../../../stories/mocks/osmose_add.json';

describe('When using snapshots', () => {
  it('Should render with osm fixable data ', () =>
    snapshotWithElementChildren(Osmose.Suggestion, {
      title: '',
      fixes: fixData.elems[0].fixes[0]
    }));

  it('Should render with only osm', () =>
    snapshotWithElementChildren(Osmose.Suggestion, {
      title: '',
      osm: fixData.elems[0].tags
    }));

  it('Should render with new data', () =>
    snapshotWithElementChildren(Osmose.Suggestion, {
      title: '',
      fixes: newData.new_elems[0]
    }));

  it('Should render with no tags or fixes', () =>
    snapshotWithElementChildren(Osmose.Suggestion, {
      title: ''
    }));
});
