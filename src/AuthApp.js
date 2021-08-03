import React, { Component } from 'react';
import './App.css';
import { API, graphqlOperation } from 'aws-amplify'
import { createBlog } from './graphql/mutations'
import { listBlogs } from './graphql/queries'
import { withAuthenticator } from 'aws-amplify-react'

class AuthApp extends Component {
  state = {
    name: ''
  }
  componentDidMount() {
    API.graphql(graphqlOperation(listBlogs))
    .then(data => console.log('data from api: ', data))
    .catch(err => console.log('err', err))
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  createBlog = async () => {
    try {
      await API.graphql(graphqlOperation(createBlog, {input: this.state}))
      console.log('blog created...')
    } catch (err) {
      console.log('error creating blog..', err)
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <input name='name' onChange={this.onChange} />
          <button
            onClick={this.createBlog}
          >Create Blog</button>
        </div>
      </div>
    );
  }
}

export default withAuthenticator(AuthApp, { includeGreetings: false });
