import React, { Component } from 'react';
import './App.css';
import { API, graphqlOperation, Auth } from 'aws-amplify'
//import { createComment } from './graphql/mutations'
import * as mutations from './graphql/mutations';
import { listBlogs } from './graphql/queries'
import { withAuthenticator } from 'aws-amplify-react'
import { Form } from 'semantic-ui-react'
import styled from 'styled-components'

const BoxStyle=styled.div`
padding-left: 1vw;
padding-right: 1vw;
padding-top: 1vh;
`


class AuthComment extends Component {
  state = {
      content: '',
      author: '',
      commentPostId: this.props.pid
  }
  componentDidMount() {
    Auth.currentCredentials()

      Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      }).then(user => this.setState({author: user.username}))
        .catch(err => console.log(err));
  }
    onChangeText = e => {
        this.setState({ [e.target.name]: e.target.value})
    }
    createComment = async () => {
        try {
            await API.graphql({query: mutations.createComment, variables: {input: this.state}, authMode: 'AMAZON_COGNITO_USER_POOLS'});
        } catch (err) {
            console.log('error creating comment..', err)
        }
        window.location.reload();
    }
    render() {
      return (
          <BoxStyle>
            <Form>
              <Form.TextArea fluid placeholder="text of comment" name='content' onChange={this.onChangeText} />       
              <Form.Button
                onClick={this.createComment}
              >Create Comment
              </Form.Button>
            </Form>
          </BoxStyle>
    );
  }
}


const Hold = () => {
    return (
        <div>
          <input name='content' onChange={this.onChange} />
          <button
            onClick={this.createComment}
          >Comment</button>
        </div>
    )
}

export default withAuthenticator(AuthComment, { includeGreetings: false });
