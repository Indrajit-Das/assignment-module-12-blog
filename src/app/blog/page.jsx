import getPosts from '../../lib/posts';
import Link from "next/link";

const Blog = async()=> {
    const data = await getPosts();
    return (
        <div>
            {data.map((element)=>{
                return (
                    <div key={element.id} className='p-2 m-3 border-2 border-slate-800 rounded-lg'>
                        <p className='p-2 ml-5'>
                            <Link href={`blog/${element.id}`}>Post-Title -&gt;&nbsp;{element.title}</Link>
                        </p>
                    </div>
                );
            })}
             
        </div>
    );
};

export default Blog;