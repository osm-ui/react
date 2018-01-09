import React from 'react';
import { snapshotWithElementChildren } from 'helpers/tests';
import { Notification } from 'index';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Notification.Group));
});
