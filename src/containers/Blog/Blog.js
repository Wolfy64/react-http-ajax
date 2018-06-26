import React, { Component } from 'react';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from '../Blog/Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));

class Blog extends Component {
  state = {
    auth: true
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: 'pink',
                    textDecoration: 'underline'
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: 'test',
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}
                >
                  Test
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" exact component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not Found</h1>} />
          {/* <Redirect from="/" to="/posts/" /> */}
          {/* <Route path="/" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
