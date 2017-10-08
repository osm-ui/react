import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';

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
    require('../src/stories/introduction');
    require('../src/stories/Button');
    require('../src/stories/Alert');
    require('../src/stories/Form');
    require('../src/stories/Loader');
    require('../src/stories/Column');
    require('../src/stories/Toolbar');
    require('../src/stories/Titlebar');
    require('../src/stories/Map');
    /* eslint-enable */
}


configure(loadStories, module);
