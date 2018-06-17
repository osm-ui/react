import 'jest-styled-components';
import { snapshotWithElementChildren } from 'helpers/tests';
import { Scrollable } from 'index';

describe('When using snapshots', () => {
  it('Should render with element children ', () =>
    snapshotWithElementChildren(Scrollable));
});
