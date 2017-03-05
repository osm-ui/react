import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);


function loadStories() {
    /* eslint-disable */
    require('./textarea');
    require('./map');
    /* eslint-enable */
}


configure(loadStories, module);
