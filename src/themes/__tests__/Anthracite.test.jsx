import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from '../../helpers/tests';
import Anthracite from '../Anthracite';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Anthracite));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Anthracite));
});
