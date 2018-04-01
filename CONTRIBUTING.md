# Contribute

## Installation

```
$ git clone git@github.com:osm-ui/react.git osm-ui-react
$ cd osm-ui-react
$ npm install
$ npm run storybook
```


## Development

### Storybook

Storybook is used to develop and document the components.

```
$ npm run storybook
```


### Tests

```
$ npm run test-watch
```


## Release

```
$ git checkout develop
$ npm version patch -m "release: %s"
$ npm publish
$ git checkout master
$ git merge develop
$ git push origin master
```

`npm version` tests the code and build it. Then it upgrades the package version number according to the used keyword (patch, minor or major) and commit the modifications in Git (with a proper version tag). Finally, it pushes it to repository with the tag.
