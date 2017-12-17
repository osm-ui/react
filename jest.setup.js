import 'raf/polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jQuery from 'jquery';

global.$ = global.jQuery = jQuery;

configure({ adapter: new Adapter() });
