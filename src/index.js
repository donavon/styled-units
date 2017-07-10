const units = ['px', 'em', 'rem', 'vw', 'vh'];

const withUnit = (value, unit) => (
  value ? `${value}${unit}` : '0'
);

const styledUnits = {
  prop: key => props => props[key],
  pct: key => props => withUnit(props[key], '%'),
};

units.forEach((unit) => {
  styledUnits[unit] = key => props => withUnit(props[key], unit);
});

module.exports = styledUnits;
