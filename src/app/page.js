import getPosts from '@/lib/posts';

export default async function Home() {
  const data = await getPosts();
  return (
    <>
        <p>{JSON.stringify(data)}</p>
    </>
  )
}

