import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from '../../helpers/tests';
import Brown from '../Brown';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Brown));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Brown));
});
