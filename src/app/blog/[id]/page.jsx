import getSinglePost from "@/lib/singlePost";

 const SingleBlogPost = async ({params}) => {
    const id = params.id;
    const data= await getSinglePost(id);
    return (
        <div>
            <p>{data?.postDetails?.title}</p> 
            <p>{data?.postDetails?.content}</p>
        </div>
    );
};

export default SingleBlogPost;