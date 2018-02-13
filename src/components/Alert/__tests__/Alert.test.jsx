import 'jest-styled-components';
import { snapshotWithElementChildren } from 'helpers/tests';
import { Alert } from 'index';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Alert));
});
