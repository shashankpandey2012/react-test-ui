/***  examples/src/index.js ***/
import React from 'react';
import { render} from 'react-dom';
import { Button } from '../../src';
const App = () => (
  <div>
    <Button>hello</Button>
  </div>
);
render(<App />, document.getElementById("root"));
