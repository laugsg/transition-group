import React from "react";
import { CSSTransition } from "react-transition-group";

import "../styles/CssTransitionComponent.module.css";

export function CssTransitionComponent() {
  const [inProp, setInProp] = React.useState(false);
  return (
    <div>
      <CSSTransition
        in={inProp}
        timeout={200}
        classNames="my-node"
        unmountOnExit
      >
        <div>{"I'll receive my-node-* classes"}</div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(!inProp)}>
        Click to start transition
      </button>
    </div>
  );
}
