import 'jest-styled-components';
import { snapshotWithElementChildren } from 'helpers/tests';
import { Button } from 'index';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Button));
});

describe('When using snapshots on an anchor typed Button', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Button, { type: 'anchor' }));
});
