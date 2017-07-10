import * as styledUnits from '.';

const units = ['px', 'em', 'rem', 'vw', 'vh'];

test('styledUnits has the proper exports', () => {
  expect(typeof styledUnits.px === 'function').toBe(true);
  expect(typeof styledUnits.em === 'function').toBe(true);
  expect(typeof styledUnits.rem === 'function').toBe(true);
  expect(typeof styledUnits.vw === 'function').toBe(true);
  expect(typeof styledUnits.vh === 'function').toBe(true);
  expect(typeof styledUnits.pct === 'function').toBe(true);
  expect(typeof styledUnits.prop === 'function').toBe(true);
});

units.forEach((unit) => {
  test(`Non-zero ${unit} value returns 'x${unit}'`, () => {
    const props = { foo: 1 };
    expect(styledUnits[unit]('foo')(props)).toBe(`1${unit}`);
  });
  test(`Zero ${unit} value return '0'`, () => {
    const props = { foo: 0 };
    expect(styledUnits[unit]('foo')(props)).toBe('0');
  });
});

test('Non-zero percent value returns \'x$%\'', () => {
  const props = { foo: 1 };
  expect(styledUnits.pct('foo')(props)).toBe('1%');
});
test('Zero percent value return \'0\'', () => {
  const props = { foo: 0 };
  expect(styledUnits.pct('foo')(props)).toBe('0');
});

test('props returns the prop', () => {
  const props = { foo: 'bar' };
  expect(styledUnits.prop('foo')(props)).toBe('bar');
});
