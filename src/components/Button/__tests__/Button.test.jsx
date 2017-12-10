import React from 'react';
import { snapshotWithElementChildren } from '../../../helpers/tests';
import Button from '../';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Button));
});

describe('When using snapshots on an anchor typed Button', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Button, { type: 'anchor' }));
});
