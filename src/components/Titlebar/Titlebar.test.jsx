import React from 'react';
import { snapshotWithElementChildren } from '../../helpers/tests';
import Titlebar from './';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Titlebar));
});

describe('When using snapshots with the maximized prop', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Titlebar, { maximized: true }));
});
