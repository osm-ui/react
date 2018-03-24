import 'jest-styled-components';
import { snapshotWithElementChildren } from 'helpers/tests';
import { Osmose } from 'index';

import fixData from '../../../../stories/mocks/osmose_fix.json';

describe('When using snapshots', () => {
  it('Should render with element children ', () =>
    snapshotWithElementChildren(Osmose, { data: fixData }));
});
