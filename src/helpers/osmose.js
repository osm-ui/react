export function formatDeletedTags(fix, osmTags) {
  return {
    ...fix,
    del: fix.del.map(deletedTag => {
      return osmTags.find(tag => tag.k === deletedTag);
    })
  };
}

export function formatOsmTags(data) {
  return data.reduce((acc, item) => {
    return {
      ...acc,
      [item.k]: item.v
    };
  }, {});
}

export function fixOsmTags(osmTags, fix) {
  const newOsm = {
    ...formatOsmTags(osmTags),
    ...formatOsmTags(fix.add),
    ...formatOsmTags(fix.mod)
  };

  fix.del.forEach(tag => Reflect.deleteProperty(newOsm, tag));

  return newOsm;
}
