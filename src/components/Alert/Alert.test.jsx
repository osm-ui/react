import React from 'react';
import { snapshotWithElementChildren } from '../../helpers/tests';
import Alert from './';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Alert));
});
