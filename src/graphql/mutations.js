/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = `mutation CreateBlog($input: CreateBlogInput!) {
  createBlog(input: $input) {
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
export const updateBlog = `mutation UpdateBlog($input: UpdateBlogInput!) {
  updateBlog(input: $input) {
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
export const deleteBlog = `mutation DeleteBlog($input: DeleteBlogInput!) {
  deleteBlog(input: $input) {
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
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
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
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
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
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
