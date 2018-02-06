import React from 'react';
import { snapshotWithElementChildren } from 'helpers/tests';
import Form from '../index';

describe('When using snapshots', () => {
  it('Form should render with an element children', () =>
    snapshotWithElementChildren(Form));
});
