import React from 'react';
import { snapshotWithElementChildren } from 'helpers/tests';
import Form from '../index';

describe('When using snapshots', () => {
  it('Input should render with an element children', () =>
    snapshotWithElementChildren(Form.Input));

  it('Input with Hint should render with an element children', () =>
    snapshotWithElementChildren(Form.Input, { hint: '' }));
});
