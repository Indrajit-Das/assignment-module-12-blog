import getSinglePost from "@/lib/singlePost";
import Image from "next/image";

 const SingleBlogPost = async ({params}) => {
    const id = params.id;
    const data= await getSinglePost(id);
    return (
        <div className="p-10">
            {data.postDetails !== null && (
                <div>
                    <div className="flex justify-between">   
                        <div></div>
                        <span className="ml-auto">Created-At :&nbsp; {data?.postDetails?.created_at}</span>
                    </div>
                    <Image src={data?.postDetails?.img} width="300" height="600" alt={data?.postDetails?.title} />
                    <h2 className='font-xl font-bold mb-5 underline underline-offset-8 mt-5'>{data?.postDetails?.title}</h2>
                    <p className="justify-center mt-5">{data?.postDetails?.content}</p>
                </div>
            )}
        </div>

    );
};

export default SingleBlogPost;