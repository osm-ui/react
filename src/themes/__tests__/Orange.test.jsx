import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from 'helpers/tests';
import Orange from 'themes/Orange';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Orange));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Orange));
});
