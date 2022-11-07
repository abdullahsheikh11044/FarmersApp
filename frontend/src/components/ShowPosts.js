import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShowPosts = () => {

    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const result = await axios.get('http://127.0.0.1:8000/posts/post_api_list/');

        console.log(result.data)
        setPosts(result.data)
    }

    useEffect(() => {
      fetchPosts();
    }, [])


    return (
        <div className='row'>
            <div className="col-4">
            {
              
                posts.map((post, index) => (
                    <Card key={index} className="m-3 rounded shadow-lg main-post-show" style={{ width: '22em' }}>

                    <Card.Img variant="top" src={post.image} />

                    <Card.Body>

                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text> {post.body} </Card.Text>
                        
                        <Link className="btn btn-primary mr-2" to={"/PostShow" + `/${post.id}`}>Full Detail</Link>

                    </Card.Body>
                    </Card>
                ))
                
              }
            </div>
           
            
        </div>
    );
};

export default ShowPosts;