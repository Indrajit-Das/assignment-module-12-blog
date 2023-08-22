const getPosts = async()=>{
    try{
        const response = await fetch("https://basic-blog.teamrabbil.com/api/post-list/2");
        if(!response.ok){
            throw new Error("Something went wrong");
        }
        return response.json();
    }catch(error){
        throw error;
    }
}
export default getPosts;