import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from '../../helpers/tests';
import Default from '../Default';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Default));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Default));
});
