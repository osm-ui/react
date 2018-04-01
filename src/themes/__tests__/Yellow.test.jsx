import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from 'helpers/tests';
import Yellow from 'themes/Yellow';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Yellow));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Yellow));
});
