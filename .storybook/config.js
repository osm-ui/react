import { configure, setAddon } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import infoAddon from '@kadira/react-storybook-addon-info';
import 'semantic-ui-css/semantic.min.css';

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
    require('../stories/column');
    require('../stories/map');
    require('../stories/textarea');
    require('../stories/button');
    /* eslint-enable */
}


configure(loadStories, module);
