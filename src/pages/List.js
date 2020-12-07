import React from 'react'
import {useRouteMatch, useParams, Route, Switch, Link} from 'react-router-dom'
import Post from './Post'
function List() {
    let match = useRouteMatch();
    console.log(match)
    return (
        <div>
        <Switch>
        <Route path={`${match.path}/:id`}>
          <Post />
        </Route>
        <Route path={match.path}>
          <h3>Main posts page</h3>
          <Link to='post/1'>Post#1</Link><br/>
          <Link to='post/2'>Post#2</Link>
        </Route>
      </Switch>
        </div>
    )
}

export default List
