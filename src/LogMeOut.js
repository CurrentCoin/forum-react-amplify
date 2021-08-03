import React from 'react';
import './index.css';
import * as queries from './graphql/queries';
import { Connect, S3Image } from 'aws-amplify-react';
import Amplify, { graphqlOperation } from 'aws-amplify'
import { BackPost, BackFront, BackG, Headline, Imgur, BackPage, Pshow, TextShow, Spanner, Dcom, Dag, Dshow } from './BlogCss.js';
import { Link } from 'react-router-dom'

import AuthApp from './AuthApp';
import AppLogin from './AppLogin';
import BlogPage from './BlogPage';
import styled from 'styled-components';


const config = {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:06b32572-6863-4847-bfe3-1032e4022df4",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_Z3ETAzKdP",
    "aws_user_pools_web_client_id": "4tn58ibgpqhacbciqf5r5p0hl9",
    "oauth": {},
    "aws_appsync_graphqlEndpoint": "https://vmmxntdtxvao5pb2qfwm4k5lfe.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "AWS_IAM",
    "aws_user_files_s3_bucket": "src8f97eae53799429aadcb33b45a3a14d2-std",
    "aws_user_files_s3_bucket_region": "us-east-1"
};

Amplify.configure(config)

const Head = styled.span`
    color: red;
    padding-right: 1vw;
    font-size: 3vh;
    text-decoration: none;
`

const Pi = {
    display: 'inline',
    verticalAlign: 'top',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    lineHeight: '28px',
    
}


const oneLine = {
    color: 'black',
}

const Linker = (props) => {
    const dict ={
        "Bitcoin": "/blog/bitcoin",
        "Ethereum": "/blog/ethereum",
        "Libra": "/blog/libra",
        "Crypto News": "/blog/cryptonews",
        "Altcoins": "/blog/altcoins",
        "CurrentCoin": "/blog/currentcoin",
        "Miscellaneous": "/blog/miscellaneous"
    }
    const location = {
        pathname: dict[props.name],
        state: props.name,
    }    
    return (
        <Link style={{ color: '#800020', textDecoration: 'none' }} to={location}>{props.name}</Link> 
    )
}

{ /* <Link to={dict[props.name]}>{props.name}</Link> */ }

const ListView = ( props ) => {
    let orderBlogs=props.blogs.sort((a, b) => (a.rank > b.rank) ? 1 : -1);
    return (
    <div>
      <ul>
        {orderBlogs.map(blog => <div key={blog.rank}>
                                  <BackG>
                                    <p style={oneLine}><Icon banner={blog.banner}/><Head><Linker name={blog.name}/></Head>{blog.content}
                                    <CountPosts blog_id={blog.id}/></p>
                                  </BackG>
                                </div>)}
      </ul>
    </div>
    )
}

const Icon = (props) => {
    return (
        <div style={{display: "inline-block", marginRight: "1vw",}}>
        <S3Image imgKey={props.banner} />
        </div>
    )
}

const GetCount=(props)=>{
    if (props.posts.length ===1) {
    return (
        <span style={{color: 'black',marginLeft: '0.5vw',}}>{props.posts.length} post</span>
    )
    } else {
        return (<span style={{color: 'black',marginLeft: '0.5vw',}}>{props.posts.length} posts</span>        )
    }
}

const CountPosts = (props) => {
    return (
          <Connect query={graphqlOperation(queries.getBlog, {id: props.blog_id})}> 
            {(
                { data: { getBlog }, loading, error }) => {
                  if (error) return (<h3>Error</h3>);
                  if (loading || !getBlog) return (<h3>Loading...</h3>);
                  return (<GetCount posts={getBlog.posts.items} /> );
                }
            }
        </Connect>
    )
}

const SplashPage = () => {
    return (
        <BackFront>
        <div style={{height: '100vh', width: '100vw'}}>
          <Connect query={graphqlOperation(queries.listBlogs)}>
            {(
                { data: { listBlogs }, loading, error }) => {
                  if (error) return (<h3>Error</h3>);
                  if (loading || !listBlogs) return (<h3>Loading...</h3>);
                  return (<ListView blogs={listBlogs.items} /> );
                }
            }
          </Connect>
          </div>
        </BackFront>

    )
    
}

export default SplashPage;
