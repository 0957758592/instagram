import React from 'react';
import PostList from './components/PostList'
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'

function App() {

  const [user, setUser] = React.useState('')
  const [posts, setPosts] = React.useState([])
  
  React.useEffect(() => {
    document.title = user ? `${user}'s Feed` : 'Please Login';
  }, [user])


  const handleAddPost = React.useCallback(newPost => {
    setPosts([newPost, ...posts])
  }, [posts]);

  if (!user) {
    return <Login setUser={setUser}/>
  }

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} handleAddPost={handleAddPost} posts={posts} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
