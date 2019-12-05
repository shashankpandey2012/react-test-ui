/***  examples/src/index.js ***/
import React from 'react';
import { render} from 'react-dom';
import { Button } from '../../src';
const App = () => (
  <div>
    <Button>hello</Button>
    <Button variant='outline'>hello</Button>
    <Button variant='transparent'>hello button</Button>
  </div>
);
render(<App />, document.getElementById("root"));
