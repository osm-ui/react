import { formatOsmTags, formatDeletedTags, fixOsmTags } from 'helpers/osmose';

import data1 from '../../../stories/mocks/osmose_fix.json';
import data2 from '../../../stories/mocks/osmose_fix_2.json';

describe('formatOsmData', () => {
  const data = data2.elems[0].tags;
  const obj = formatOsmTags(data);

  it('should format Osmose {k, v} values as object', () => {
    data.forEach(item => expect(obj[item.k]).toEqual(item.v));
  });
});

describe('formatDeletedTags', () => {
  const tags = data1.elems[0].tags;
  const fix = data1.elems[0].fixes[1];
  const newFix = formatDeletedTags(fix, tags);
  const tagsObj = formatOsmTags(tags);
  const delObj = formatOsmTags(newFix.del);

  it('should add deleted tags as {k, v} values', () => {
    fix.del.forEach(k => expect(delObj[k]).toEqual(tagsObj[k]));
  });
});

describe('fixOsm', () => {
  it('should add deleted tags as {k, v} values', () => {
    const tags = data1.elems[0].tags;
    const fix = data1.elems[0].fixes[1];
    const fixed = fixOsmTags(tags, fix);

    fix.add.forEach(item => expect(fixed[item.k]).toEqual(item.v));
    fix.mod.forEach(item => expect(fixed[item.k]).toEqual(item.v));
    fix.del.forEach(item => expect(fixed[item.k]).toBeUndefined());
  });
});
