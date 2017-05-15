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
    require('../stories/Button');
    require('../stories/Alert');
    require('../stories/Form');
    require('../stories/Loader');
    require('../stories/Column');
    require('../stories/Toolbar');
    require('../stories/Map');
    /* eslint-enable */
}


configure(loadStories, module);
