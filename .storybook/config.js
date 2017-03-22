import { configure, setAddon } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

setOptions({
    name: 'OSM UI - REACT',
    url: 'https://github.com/osm-ui/react',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: false,
    showSearchBox: false,
    downPanelInRight: false,
    sortStoriesByKind: false,
});


function loadStories() {
    /* eslint-disable */
    require('../stories/textarea');
    require('../stories/map');
    /* eslint-enable */
}


configure(loadStories, module);
