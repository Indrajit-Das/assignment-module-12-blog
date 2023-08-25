import getPosts from '../../lib/posts';
import Link from "next/link";
import Image from "next/image";

const Blog = async()=> {
    const data = await getPosts();
    const formatDate=(timestamps)=>{
        let date = new Date(timestamps);
        const fullYear = date.getFullYear();
        const month = String(date.getMonth()+1).padStart(2,'0');
        const day = String(date.getDay()+1).padStart(2,'0');
        return `${day}-${month}-${fullYear}`
    }
    return (
        <div>
            {data.map((element)=>{
                return (
                    <div key={element.id} className='p-2 m-2 border-2 border-slate-800 rounded-lg'>
                        <Link href={`blog/${element.id}`}>
                            <div className="flex justify-between">
                                <div></div>
                                <span>{formatDate(element.created_at)}</span>
                            </div>
                            <div className="flex">
                                <Image src={element.img} height="200" width="300" alt={element.title} />
                                <p className='p-1 ml-5'>Title -&gt;&nbsp;{element.title}</p>
                            </div>
                        </Link>
                    </div>
                );
            })}
             
        </div>
    );
};

export default Blog;