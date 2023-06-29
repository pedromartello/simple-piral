import * as React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { IntlProvider, FormattedMessage } from 'react-intl';
import { createInstance, Piral } from 'piral-core';
import { layout, errors } from './layout';
import { pilets as availablePilets } from './pilets';


// change to your feed URL here (either using feed.piral.cloud or your own service)

const messages = {
  'en-US': {
    "home.head": 'Shell Home',
    "page1.head": 'Page 1',
    "page2.head": 'Page 2',
    "home.content": "Shell home with intl content",
    "page1.content": "Embedded Pilet with intl content",
    "page2.content": "Externally loaded Pilet with intl content",
  },
};
 

const Home = () => {
  return (
    <>
      <h1><FormattedMessage id='home.head' /></h1>
      <p>
        <FormattedMessage id='home.content' />
      </p>
      <Link to="/page1">page 1</Link><br />
      <Link to="/page2">page 2</Link>
    </>
  );
};

const AppProvider = ({ children }) => (
  <IntlProvider locale= {navigator.language} messages={messages[navigator.language]} >
    {children}
  </IntlProvider>
);

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
    routes: {
      '/': Home,
    },
    provider: AppProvider 
  },
  requestPilets() {
    return fetch('http://localhost:1234/api/v1/feed/lms')
      .then((res) => res.json())
      .then((res) => res.items);
  },
  plugins: [],
  availablePilets,
});

ReactDOM.render(
  <Piral instance={instance} />,
  document.querySelector('#app')
);

