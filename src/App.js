import React, {useMemo, useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
     const [posts, setPosts] = useState([
         {id: 1, title: 'PHP', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
         {id: 2, title: 'Javascript', content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'},
         {id: 3, title: 'Mysql', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'},
     ])

   // const [selectedSort, setSelectedSort] = useState("")
   // const [searchQuery, setSearchQuery] = useState("")

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        if(filter.sort){
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts])
    const createPost = (newPost) => {
         setPosts([...posts, newPost]);
    }

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const removePost = (post) => {
         //console.log(post);
         setPosts(posts.filter((p) => p.id !== post.id));
    }


  return (
      <>
          <div className="App">

          <PostForm create={createPost}/>
              <PostFilter filter={filter} setFilter={setFilter} />
              {sortedAndSearchedPosts.length !== 0
                ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"List of posts"}/>
                : <h4>Posts not found</h4>
              }

        </div>
      </>
  );
}

export default App;
