import getPosts from '../../lib/posts';
import Link from "next/link";

const Blog = async()=> {
    const data = await getPosts();
    return (
        <div>
            {data.map((element)=>{
                return (
                    <p key={element.id}>
                        <Link href={`blog/${element.id}`}>{element.title}</Link>
                    </p>
                );
            })}
             
        </div>
    );
};

export default Blog;