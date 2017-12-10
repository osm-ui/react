import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from '../../helpers/tests';
import LightGray from '../LightGray';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(LightGray));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(LightGray));
});
