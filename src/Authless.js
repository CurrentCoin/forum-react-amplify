import React from 'react';
import './index.css';
import * as queries from './graphql/queries';
import Amplify, { graphqlOperation } from 'aws-amplify'
import config from './aws-exports'
import { Connect } from 'aws-amplify-react';

Amplify.configure(config)

const ListView = ( props ) => {
    return (
    <div>
      <ul>
        {props.todos.map(todo => <div key={todo.id}>
                                   <h1 style={{color:'#d74fd5',}}>{todo.name}</h1>
                                   <p>{todo.id}</p>                                   
                                 </div>)}
      </ul>
    </div>
    )
}

const Authless = () => {
    return (
          <Connect query={graphqlOperation(queries.listBlogs)}>
            {(
                { data: { listBlogs }, loading, error }) => {
                  if (error) return (<h3>Error</h3>);
                  if (loading || !listBlogs) return (<h3>Loading...</h3>);
                  return (<ListView todos={listBlogs.items} /> );
                }
            }
          </Connect>
    )
    
}

export default Authless;
