import React, { setState, useState, useEffect } from 'react';
import styled from 'styled-components';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import * as queries from './graphql/queries';
import { Connect } from 'aws-amplify-react';
import { getBlog, listBlogs, getPost } from './graphql/queries';
import AppLoginComment from './AppLoginComment';
import AppLoginPost from './AppLoginPost';
import { BackPost, Headline, Imgur, BackPage, Pshow, TextShow, Spanner, Dcom, Dag, Dshow } from './BlogCss.js';

const ids ={
    "/blog/bitcoin": "d4861bbe-e69b-4e65-958e-567c2f09bccf",
    "/blog/ethereum": "41234f34-29fe-4b7a-8f58-a60f94958a8e",
    "/blog/libra": "e0357269-c505-4f0b-b2a2-541b281bacae",
    "/blog/cryptonews": "2917a2f0-8a34-4f60-b3fb-5a9e3bbbd547",        
    "/blog/altcoins": "6fdc8801-33f6-4dad-90fb-c1094834db73",
    "/blog/currentcoin": "92d617c5-5933-496b-9203-8479e47ac5a2",
    "/blog/miscellaneous": "b98b489a-0573-44a4-8a9d-8280ad37b03c",
}
 
const ListLinesFloat = (props)=> {
    const comText=props.comments.map((item)=>(
        <div style={{paddingTop: '1vh',}}>
        <div style={{  overflow: 'auto'}}> 
        <p>
          <span style={{color: 'black',float:'left',}}> {item.content}</span>
          <span style={{color: '#dcdcc6',float: 'right',}}>{item.author}</span>
        </p>
        </div>
        </div>        
    ))
    return (
        <div>{comText}</div>
    )
}


const ListLinesUnfloat = (props)=> {
    const comText=props.comments.map((item)=>(
        <div style={{paddingTop: '1vh',}}>
          <p style={{color: 'black',}}>{item.content}
            <span style={{color: 'gray',paddingLeft: '3vw',}}>{item.author}</span>
          </p>
        </div>        
    ))
    return (
        <div>{comText}</div>
    )
}

const ListLines = (props)=> {
    const comText=props.comments.map((item)=>(
        <div style={{paddingTop: '1vh',}}>
        <div style={{  overflow: 'auto'}}> 
        <p>
          <span style={{color: 'black',float:'left',}}> {item.content}</span>
          <span style={{color: 'gray',float: 'right',}}>{item.author}</span>
        </p>
        </div>
        </div>        
    ))
    return (
        <div>{comText}</div>
    )
}

const ListComments = (props) => {
    return (
        <div>
          <Connect query={graphqlOperation(queries.getPost, {id: props.pid})}> 
            {(
                { data: { getPost }, loading, error }) => {
                  if (error) return (<h3>Error</h3>);
                  if (loading || !getPost) return (<h3>Loading...</h3>);
                  return (<ListLines comments={getPost.comments.items} /> );
                }
            }
        </Connect>
        </div>
    )
}

const ListPost = (props) => {
    const textPost=props.post.content.map((item)=>(
            <p>{item}</p>
        ))
    console.log(props.post);    
    return (
        <BackPost>
          <Headline>{props.post.title}</Headline>
          <TextShow>
            <div>{textPost}</div>
            <p style={{color: 'gray',}}>{props.post.author}</p>
          </TextShow>
          <ListComments pid={props.post.id}/>
          <AppLoginComment pid={props.post.id}/>
        </BackPost>
        
    )

}

const ListPosts = (props) => {
    const textPosts=props.posts.map((item)=> (<ListPost post={item}/>))

    return (
        <div>
          <AppLoginPost blog_id={props.blog_id}/>          
          {textPosts}
        </div>
    )
}

const ListBlog = ( props ) => {
    return (
    <div>
      <ListPosts blog_id={props.blog.id} posts={props.blog.posts.items}/>
    </div>
    )
}

const Blogger = (match) => {
    return (
        <BackPage>
          <div style={{height: '100vh', width: '100vw'}}>
          <Connect query={graphqlOperation(queries.getBlog, {id: ids[match.match.url]})}> 
            {(
                { data: { getBlog }, loading, error }) => {
                    if (error) return (<h3>Error</h3>);
                    if (loading || !getBlog) return (<h3>Loading...</h3>);
                    return (<ListBlog blog={getBlog} /> );
                }
            }
        </Connect>
        </div>
        </BackPage>                
    )
}

export default Blogger;
