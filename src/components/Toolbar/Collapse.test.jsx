import React from 'react';
import { shallow } from 'enzyme';
import { snapshotWithElementChildren } from '../../helpers/tests';
import Toolbar from './';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Toolbar.Collapse));

  it('Should render with the size prop', () =>
    snapshotWithElementChildren(Toolbar.Collapse, { size: 'xs' }));

  it('Should render with the shape prop', () =>
    snapshotWithElementChildren(Toolbar.Collapse, { shape: 'square' }));

  it('Should render with the direction prop', () =>
    snapshotWithElementChildren(Toolbar.Collapse, { direction: 'column' }));

  it('Should render with the direction and position prop', () =>
    snapshotWithElementChildren(Toolbar.Collapse, {
      direction: 'row',
      position: 'right-top'
    }));

  it('Should render with the opened prop', () =>
    snapshotWithElementChildren(Toolbar.Collapse, { opened: true }));
});

describe('When testing the callbacks', () => {
  it('Should call the callbacks when the opened prop is passed from the beginning', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    const collapse = shallow(
      <Toolbar.Collapse opened onOpen={onOpen} onClose={onClose}>
        Test
      </Toolbar.Collapse>
    );
    const props = collapse.props();

    collapse.setProps({ ...props, opened: false });
    collapse.setProps({ ...props, opened: true });
    collapse.setProps({ ...props, opened: false });

    expect(onOpen.mock.calls.length).toBe(2);
    expect(onClose.mock.calls.length).toBe(2);
  });

  it('Should call the callbacks when the opened prop is not passed from the beginning', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    const collapse = shallow(
      <Toolbar.Collapse opened={false} onOpen={onOpen} onClose={onClose}>
        Test
      </Toolbar.Collapse>
    );
    const props = collapse.props();

    collapse.setProps({ ...props, opened: true });
    collapse.setProps({ ...props, opened: false });
    collapse.setProps({ ...props, opened: true });

    expect(onClose.mock.calls.length).toBe(1);
    expect(onOpen.mock.calls.length).toBe(2);
  });
});
