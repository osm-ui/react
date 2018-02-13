import 'jest-styled-components';
import { snapshotWithElementChildren } from 'helpers/tests';
import { Sidebar } from 'index';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Sidebar.Title));

  it('Should render with the className prop', () =>
    snapshotWithElementChildren(Sidebar.Title, { className: 'my-class' }));

  it('Should render with other props', () =>
    snapshotWithElementChildren(Sidebar.Title, { oneProp: 1, twoProp: 2 }));

  it('Should render with className and other props', () =>
    snapshotWithElementChildren(Sidebar.Title, {
      className: 'my-class',
      oneProp: 1,
      twoProp: 2
    }));
});
