import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// App.use(express.static(path.join(__dirname, "client/build")));

// App.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

ReactDOM.render(

< React.StrictMode>
<App/>
</React.StrictMode>,
  
  document.getElementById("root")
);
