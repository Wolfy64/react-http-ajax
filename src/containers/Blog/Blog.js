import React, { Component } from 'react';
import './Blog.css';
import { Route, Link } from 'react-router-dom';
import Posts from '../Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: 'test',
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}
                >
                  Test
                </Link>
              </li>
              <li>
                <Link to="/new-post">New Post</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;
