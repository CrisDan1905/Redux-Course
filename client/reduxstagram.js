import React from "react";

import { render } from "react-dom";

// Import css
import css from "./styles/style.styl";

// import Components
import Main from "./components/Main";
render(
    <Main>
        <p>Hello</p>
    </Main>,
    document.querySelector("#root")
);
