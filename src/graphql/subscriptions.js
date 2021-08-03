/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = `subscription OnCreateBlog($owner: String) {
  onCreateBlog(owner: $owner) {
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
export const onUpdateBlog = `subscription OnUpdateBlog($owner: String) {
  onUpdateBlog(owner: $owner) {
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
export const onDeleteBlog = `subscription OnDeleteBlog($owner: String) {
  onDeleteBlog(owner: $owner) {
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
export const onCreatePost = `subscription OnCreatePost($owner: String) {
  onCreatePost(owner: $owner) {
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
export const onUpdatePost = `subscription OnUpdatePost($owner: String) {
  onUpdatePost(owner: $owner) {
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
export const onDeletePost = `subscription OnDeletePost($owner: String) {
  onDeletePost(owner: $owner) {
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
export const onCreateComment = `subscription OnCreateComment($owner: String) {
  onCreateComment(owner: $owner) {
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
export const onUpdateComment = `subscription OnUpdateComment($owner: String) {
  onUpdateComment(owner: $owner) {
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
export const onDeleteComment = `subscription OnDeleteComment($owner: String) {
  onDeleteComment(owner: $owner) {
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
