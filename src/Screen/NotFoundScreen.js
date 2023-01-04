import React from "react";
import { Redirect } from "react";
function NotFoundScreen() {
  return (
    <div>
      <h1>404 page</h1>
      <p>this page does not exciste</p>
      <Redirect from="*" to="/home" />
    </div>
  );
}

export default NotFoundScreen;
