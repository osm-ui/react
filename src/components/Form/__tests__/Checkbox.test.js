import React from 'react';
import { snapshotWithElementChildren } from 'helpers/tests';
import Form from '../index';

describe('When using snapshots', () => {
  it('Checkbox should render with an element children', () =>
    snapshotWithElementChildren(Form.Checkbox, { id: '1' }));
});
