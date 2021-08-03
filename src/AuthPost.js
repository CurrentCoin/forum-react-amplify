import React, { Component } from 'react';
import './App.css';
import { API, graphqlOperation, Auth } from 'aws-amplify'
//import { createComment } from './graphql/mutations'
import * as mutations from './graphql/mutations';
import { listBlogs } from './graphql/queries'
import { withAuthenticator } from 'aws-amplify-react'
import { Form } from 'semantic-ui-react'
import styled from 'styled-components';

const BoxStyle=styled.div`
padding-left: 1vw;
padding-right: 1vw;
`

class AuthPost extends Component {
  state = {
      content: '',
      title: '',
      author: '',
      postBlogId: this.props.pid
  }
  componentDidMount() {
    Auth.currentCredentials()

    Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => this.setState({author: user.username}))
        .catch(err => console.log(err));
  }
  onChangeTitle = e => {
      this.setState({ [e.target.name]: e.target.value })
  }
  onChangeText = e => {
      this.setState({ [e.target.name]: e.target.value })
  }
  createPost = async () => {
      try {
        await API.graphql({query: mutations.createPost, variables: {input: this.state}, authMode: 'AMAZON_COGNITO_USER_POOLS'});
      } catch (err) {
          console.log('error creating post..', err)
      }
      window.location.reload();          
  }
  
  render() {
      return (
          <BoxStyle>
            <Form>
              <Form.Group widths='equal'>
                <Form.Input fluid placeholder="title of post" name='title' onChange={this.onChangeTitle} />
              </Form.Group>
              <Form.TextArea fluid placeholder="text of post" name='content' onChange={this.onChangeText} />       
              <Form.Button
                onClick={this.createPost}
              >Create Post
              </Form.Button>
            </Form>
          </BoxStyle>
    );
  }
}

export default withAuthenticator(AuthPost, { includeGreetings: false });
