import * as React from 'react';
import { Link } from 'react-router-dom';

const Page = React.lazy(() => import('./Page'));

export function setup(app) {
  app.registerPage('/page2', Page);
}
