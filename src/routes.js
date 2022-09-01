import React from "react";
import { Route } from "react-router-dom";

import {
  Schedule,
  Accommodations,
  Activities,
  Faqs,
  rooms,
  Dining,
  Home,
  Legacy,
  Terms,
} from "./ui/index.ui";

const R = ({ path, component: Component, exact, key }) => (
  <Route path={path} exact={exact} key={key}>
    <Component />
  </Route>
);

const routes = [
  { path: "/", component: Home },
  { path: "/schedule", component: Schedule },
  { path: "/accomodation", component: Accommodations },
  { path: "/rooms", component: rooms },
  { path: "/activities", component: Activities },
  { path: "/dining", component: Dining },
  { path: "/faqs", component: Faqs },
  { path: "/legacy", component: Legacy },
  { path: "/terms", component: Terms },
];

export default routes.map(({ path, component: Component, exact }) => (
  <R path={path.toLowerCase()} component={Component} key={path} exact={true} />
));
