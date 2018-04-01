import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from 'helpers/tests';
import Sky from 'themes/Sky';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Sky));

  it('Should render with a text children', () => snapshotWithTextChildren(Sky));
});
