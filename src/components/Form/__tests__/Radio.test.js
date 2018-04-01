import 'jest-styled-components';
import { snapshotWithElementChildren } from 'helpers/tests';
import Form from '../index';

describe('When using snapshots', () => {
  it('Radio should render with an element children', () =>
    snapshotWithElementChildren(Form.Radio, {
      id: '1',
      value: 'myValue',
      name: 'myName'
    }));
});
