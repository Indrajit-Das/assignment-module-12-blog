const getSinglePost = async(id)=>{
    try{
        const response = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);
        if(!response.ok){
            throw new Error("Something went wrong");
        }
        return response.json();
    }catch(error){
        throw error;
    }
}
export default getSinglePost;