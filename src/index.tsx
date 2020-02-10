import React from "react";
import ReactDOM from "react-dom";

import App from "<src>/App";
import * as serviceWorker from "<src>/serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// More about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
