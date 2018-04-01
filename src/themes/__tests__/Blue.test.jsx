import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from 'helpers/tests';
import Blue from 'themes/Blue';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Blue));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Blue));
});
