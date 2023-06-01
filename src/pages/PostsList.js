import styled from "styled-components";
import { HiOutlineHeart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "../components/PostItem";


export default function PostsList() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const response = axios.get(`http://localhost:5000/home`).
            then((res) => setPosts(res.data)).
            catch(err => console.log(err.response.data));
        
    }, []);
    
    
    console.log(posts);
    return (
        <div>
        {
            posts.map((p) => 
                <PostItem
                    link={p.link}
                    content={p.content}/>
            )
        }
        
      </div>
    
    )


}

