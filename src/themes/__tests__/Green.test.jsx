import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from '../../helpers/tests';
import Green from '../Green';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Green));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Green));
});
