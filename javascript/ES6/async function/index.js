let getUsers = async () => {
    let get = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    return get;
}
let getcomm = async () => {
    let comm = await fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    return comm;
}

let onButtonClick = async () => {
    try {
        let posts = await getUsers()
        console.log('posts :', posts)
        let allComments = await getcomm()
        // console.log('Comments :', allComments)
        let comment = posts.map(data => {
          data.Comments = allComments.filter(x => data.id == x.postId
        )
        return data 
    })
    // console.log(comment);
      }
      catch(err) {
          console.log('Err :', err)
        }
    } 
 onButtonClick()
