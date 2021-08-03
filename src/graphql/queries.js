/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listBlogs = `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      banner
      name
      rank
      owner
      posts {
        nextToken
        items {
          id
          title
          content
        }
      }
    }
    nextToken
  }
}
`;
export const listBlogPosts = `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      posts {
        items {
          id
        }
      }
    }
    nextToken
  }
}
`;
export const getBlog = `query GetBlog($id: ID!) {
  getBlog(id: $id) {
    id
    content
    banner
    name
    rank
    owner
    posts {
      items {
        id
        title
        content
        banner
        images
        tags
        author
        votes
        owner
      }
      nextToken
    }
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      banner
      images
      tags
      author
      votes
      blog {
        id
        content
        banner
        name
        rank
        owner
      }
      owner
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    content
    banner
    images
    tags
    author
    votes
    blog {
      id
      content
      banner
      name
      rank
      owner
      posts {
        nextToken
      }
    }
    owner
    comments {
      items {
        id
        content
        author
        banner
        votes
        owner
      }
      nextToken
    }
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    author
    banner
    votes
    post {
      id
      title
      content
      banner
      images
      tags
      author
      votes
      blog {
        id
        content
        banner
        name
        rank
        owner
      }
      owner
      comments {
        nextToken
      }
    }
    owner
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      author
      banner
      votes
      post {
        id
        title
        content
        banner
        images
        tags
        author
        votes
        owner
      }
      owner
    }
    nextToken
  }
}
`;
