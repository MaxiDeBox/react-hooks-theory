import React from "react";
import {useState, useEffect, useRef, useMemo, useCallback} from "react";
import Main from "./Main";
import Alert from "./alert/Alert";
import {AlertProvider} from "./alert/AlertContext";

function App() {
  return (
    <AlertProvider>
      <div className={'container pt-3'}>
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  );
}

export default App;
