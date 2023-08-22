import getPosts from '@/lib/posts';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const data = await getPosts();
  return (
    <>
        {data.map((post)=>{
          return (
            <div key={post.id} className={'p-10'}>
              <Link href={`blog/${post.id}`}>
                <h3>{post.id}&nbsp;=&gt;{post.title}</h3>
              </Link>
            </div>
          )
        })}
    </>
  )
}

