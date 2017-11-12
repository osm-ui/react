import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from '../../helpers/tests';
import Alert from './';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Alert));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Alert));
});
