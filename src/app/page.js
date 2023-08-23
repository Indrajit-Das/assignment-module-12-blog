import getPosts from '@/lib/posts';
import Link from 'next/link';

export default async function Home() {
  const data = await getPosts();
  return (
    <div className="mt-10">
          {data.map((element)=>{
              return (
                  <div key={element.id} className='p-2 m-2 border-2 border-slate-800 rounded-lg'>
                      <p className='p-1 ml-5'>
                          <Link href={`blog/${element.id}`}>Post-Title -&gt;&nbsp;{element.title}</Link>
                      </p>
                  </div>
              );
          })}
         
            
    </div>
  )
}

