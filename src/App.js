import React, {useEffect, useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModel from "./components/UI/model/MyModel";
import PostCounter from "./components/PostCounter";
import PostService from "./components/API/PostService";
import {usePosts} from "./hooks/usePosts";
import {getPageCount, getPagesArray} from "./utils/pages";
import MyPagination from "./components/UI/pagination/MyPagination";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [isPostsLoading, setIsPostsLoading] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);


    useEffect(() => {
        fetchPosts();
    }, [page]);


    async function fetchPosts(){
        setIsPostsLoading(true);

        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));

        setIsPostsLoading(false);
    }

    const createPost = (newPost) => {
         setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
         setPosts(posts.filter((p) => p.id !== post.id));
    }

    const changePage = (page) => {
        setPage(page);
        //fetchPosts();
    }

  return (
      <>
          <div className="App">
              <div className="container">

              <MyModel>
                  <PostForm create={createPost}/>
              </MyModel>

              <PostFilter filter={filter} setFilter={setFilter} />

              <PostCounter posts={sortedAndSearchedPosts} />

              {isPostsLoading
                  ? <h4>Loading posts ...</h4>
                  : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"List of posts"}/>
              }


              <MyPagination page={page} changePage={changePage} totalPages={totalPages} />

              </div>
        </div>
      </>
  );
}

export default App;
