import React from 'react'
import MovieForm from './components/MovieForm/MovieForm'
import MovieConfirm from './components/MovieConfirm/MovieConfirm'
import MovieList from './components/MovieConfirm/MovieList'

import { Switch, Route } from 'react-router-dom'

export default (
  <Switch>
    <Route exact path="/" component={MovieForm} />
    <Route path="/confirm" component={MovieConfirm} />
    <Route exact path="/list" component={MovieList} />
  </Switch>
)
