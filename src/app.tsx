import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Memo } from './components/memo';
import { Effect } from './components/effect';

export const App = () => {
  return <>
    <h1>Demo useCallback</h1>
    <nav>
      <ul>
        <li>
          <Link to={"/memo"}>Memo</Link>
        </li>
        <li>
          <Link to={"/effect"}>Effect</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/memo' Component={Memo} />
      <Route path='/effect' Component={Effect}/>
    </Routes>
  </>;
};
