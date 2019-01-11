import React from 'react';
import ReactDOM from 'react-dom';
import AppFrame from '../AppFrame';
import Code from './index';

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`.trim();

test('renders with required props', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppFrame>
      <Code code={exampleCode} />
    </AppFrame>,
    div,
  );
});
