import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from 'helpers/tests';
import DarkGray from 'themes/DarkGray';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(DarkGray));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(DarkGray));
});
