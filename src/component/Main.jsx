import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Developer from './Developer';
import Skill from './Skill';
import Assessment from './Assessment';
import Report from './Report';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Developer}/>
        <Route path='/skills' component={Skill}/>
        <Route path='/assessments' component={Assessment}/>
        <Route path='/reports' component={Report}/>
      </Switch>
    </main>
  );
}

export default Main;