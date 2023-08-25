import getSinglePost from "@/lib/singlePost";
import Image from "next/image";

 const SingleBlogPost = async ({params}) => {
    const id = params.id;
    const data= await getSinglePost(id);
    const formatDate=(timestamps)=>{
        let date = new Date(timestamps);
        const fullYear = date.getFullYear();
        const month = String(date.getMonth()+1).padStart(2,'0');
        const day = String(date.getDay()+1).padStart(2,'0');
        return `${day}-${month}-${fullYear}`
    }
    return (
        <div className="p-10">
            {data.postDetails !== null && (
                <div>
                    <div className="flex justify-between">   
                        <div></div>
                        <span className="ml-auto">Created-At :&nbsp; {formatDate(data?.postDetails?.created_at)}</span>
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