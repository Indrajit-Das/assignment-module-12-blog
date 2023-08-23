import getSinglePost from "@/lib/singlePost";

 const SingleBlogPost = async ({params}) => {
    const id = params.id;
    const data= await getSinglePost(id);
    return (
        <div className="p-10">
            <div className="flex justify-between">
                <h2 className='font-xl font-bold mb-5 underline underline-offset-8'>{data?.postDetails?.title}</h2>
                {(data.postDetails!==null)?<span>Created-At :&nbsp; {data?.postDetails?.created_at}</span>:""}
            </div> 
            <p className="justify-center">{data?.postDetails?.content}</p>
        </div>
    );
};

export default SingleBlogPost;