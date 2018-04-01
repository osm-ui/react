import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from 'helpers/tests';
import Rose from 'themes/Rose';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Rose));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Rose));
});
