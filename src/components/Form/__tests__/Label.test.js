import 'jest-styled-components';
import { snapshotWithElementChildren } from 'helpers/tests';
import Form from '../index';

describe('When using snapshots', () => {
  it('Label should render with an element children', () =>
    snapshotWithElementChildren(Form.Label));
});
