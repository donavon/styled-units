# styled-units 💅
[![Build Status](https://travis-ci.org/donavon/styled-units.svg?branch=master)](https://travis-ci.org/donavon/styled-units)
[![npm version](https://img.shields.io/npm/v/styled-units.svg)](https://www.npmjs.com/package/styled-units)
[![Coverage Status](https://coveralls.io/repos/github/donavon/styled-units/badge.svg?branch=master)](https://coveralls.io/github/donavon/styled-units?branch=master)

TL;DR

* Provides convenient unit property helper functions that go hand-in-hand with
[`styled-components`](https://www.npmjs.com/package/styled-components) 💅
* Small footprint with **No Dependencies**!
* For example, instead of doing this:
  ```js
  width: ${({ percent }) => `${percent}%`};
  ```
  you do this:
  ```js
  width: ${pct('percent')};
  ```

## Install
```bash
$ npm i --save styled-units
```

## Usage:

```js
import styled from 'styled-components';
import { em, px, pct } from 'styled-units';

const Button = styled.button`
  padding: ${em('padding')};
  border-radius: ${px('borderRadius')};
  width: ${pct('width')};
`;

Button.defaultProps = {
  padding: 1,
  borderRadius: 4,
  width: 100,
};
```

Then use it like this.
```js
<Button borderRadius={5} padding={3}>Press Me</Button>
```

## API

Supported "units":

| Function  | Description |
| --------- | ----------- |
| `px` |  Returns the property specified with the "px" suffix |
| `em` |  Returns the property specified with the "em" suffix |
| `rem` |  Returns the property specified with the "rem" suffix |
| `pct` |  Returns the property specified with the "%" suffix |
| `vw` |  Returns the property specified with the "vw" suffix |
| `vh` |  Returns the property specified with the "vh" suffix |
| `prop` | Returns the property specified "as-is" |

## Live

Check out this live example on [CodeSandbox](https://codesandbox.io/s/oYpNjXmWN).
