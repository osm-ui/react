import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from '../../helpers/tests';
import Red from '../Red';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Red));

  it('Should render with a text children', () => snapshotWithTextChildren(Red));
});
