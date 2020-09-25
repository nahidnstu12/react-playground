import React,{useState,useEffect} from 'react'
import axios from 'axios';
import  Post from './Post';
import Pagination from './Pagination'

function Main() {
    const [posts,setPosts] = useState ([]);
    const [loading,setLoading] = useState(true);
    const [perPage] = useState(8);
    const [currentPage,setCurrentPage] = useState(1);


    useEffect(()=>{
        const fetchPosts = async () =>{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    },[posts])
    // console.log(posts)
    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentPages = posts.slice(indexOfFirst,indexOfLast);

    const paginate = numb => setCurrentPage(numb);
    return (
        <div className="container my-5">
            <div className="badge badge-info  mb-3 w-100"> <h4 className="d-flex justify-content-center">My Post</h4> </div>
            <Post _posts={currentPages} loading={loading} />
            <Pagination perPage={perPage} _total={posts.length} paginate={paginate}/>
        </div>
    )
}

export default Main
