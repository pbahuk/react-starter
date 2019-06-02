import React from "react";

import Callback from "./Callback";
import Context from "./Context";
import Effects from "./Effects";
import ImperativeHandle from "./ImperativeHandle";
import LayoutEffect from "./LayoutEffect";
import Memo from "./Memo";
import Reducer from "./Reducer";
import Ref from "./Ref";
import State from "./State";

const Hooks = () => {
  return (
    <div>
      <Callback />
      <Effects />
      <Context />
      <ImperativeHandle />
      <LayoutEffect />
      <Memo />
      <Reducer />
      <Ref />
      <State />
    </div>
  );
};

export default Hooks;
