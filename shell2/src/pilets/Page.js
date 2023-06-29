import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';

const Page = () => {

  return (
    <>
      <h1><FormattedMessage id='page1.head' /></h1>
      <p>
        <FormattedMessage id='page1.content' />
      </p>
      <Link to="/">Home page</Link><br />
      <Link to="/page2">page 2</Link>
    </>
  );
};


const piletSpec = {
  name: 'Page',
  version: '1.0.0',
  spec: 'v2',
  dependencies: {},
  config: {},
  basePath: '/pilets',
  setup(piralApi) {
    piralApi.registerPage('/page1',injectIntl(Page));
  },

};

export default piletSpec;
