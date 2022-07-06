// import React, { useEffect, useState } from 'react'
import BlogList from './bloglist';
import useFetch from './useFetch';


const Home = () => {
    const {data:blogs,isPending,isError}=useFetch("http://localhost:8000/blogs");
    // const handelDelete=(id)=>{
    //     // console.log(id);
    //     const newblog=blogs.filter(blogs=> blogs.id!==id);
    //     setdata(newblog);
    // }
    
  return (
    <div className="home">
      {isError&&<div>{isError}</div>}
      {isPending && <div><h2>Fetching Blogs!!</h2></div>}
   {blogs && <BlogList blogs={blogs} title="All Blogs!!" />}
    </div>
  )
}

export default Home;