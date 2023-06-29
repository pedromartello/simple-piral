import * as React from 'react';
import { Link } from 'react-router-dom'
import { FormattedMessage, injectIntl } from 'react-intl';

import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { useSelector, useDispatch } from "react-redux";
import { module } from './redux'
;

const Page = () => {
  const counter = useSelector((state) => state.pilet2.counter);
  const dispatch = useDispatch();
  
  const handleIncrement = () => {
    dispatch(incrementAction());
  };
  
  return (

    <div>
      <h1><FormattedMessage id='page2.head' /></h1>
      <p>
        <FormattedMessage id='page2.content' />
      </p>

      <div>
        <p>Redux Counter: {counter}</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>

      <Link to="/">Home page</Link><br />
      <Link to="/page1">page 1</Link>
    </div>
  )
};

export default injectIntl(() => (
  <DynamicModuleLoader module = {[module]}>
    <Page />
  </DynamicModuleLoader>
));