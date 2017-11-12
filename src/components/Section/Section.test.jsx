import React from 'react';
import { snapshotWithElementChildren } from '../../helpers/tests';
import Section from './';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Section));
});

describe('When using snapshots with the dimmed prop', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Section, { dimmed: true }));
});
