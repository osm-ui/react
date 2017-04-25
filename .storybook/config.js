import { configure, setAddon } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

setOptions({
    name: 'OSM UI - REACT',
    url: 'https://github.com/osm-ui/react',
    goFullScreen: false,
    showSearchBox: false,
    showLeftPanel: true,
    showDownPanel: true,
    downPanelInRight: true,
    sortStoriesByKind: false,
});


function loadStories() {
    /* eslint-disable */
    require('../stories/introduction');
    require('../stories/button');
    require('../stories/alert');
    require('../stories/form');
    // require('../stories/column');
    require('../stories/map');
    /* eslint-enable */
}


configure(loadStories, module);
