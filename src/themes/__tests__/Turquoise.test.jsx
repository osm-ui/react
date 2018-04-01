import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from 'helpers/tests';
import Turquoise from 'themes/Turquoise';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Turquoise));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Turquoise));
});
