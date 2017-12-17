import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from 'helpers/tests';
import Purple from 'themes/Purple';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Purple));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Purple));
});
