
const PostDataComponent=()=>{
    const [responseData,setResponseData]=useState(null);
    const [error,setError]=useState(null);

    const handlePostRequest=()=>{
        axios.post('https://jsonplaceholder.typicode.com/posts',{
            title:'foo',
            body:'bar',
            userId:1
        })
        .then(respose=>{
            console.log(response);
            setResponseData(response.data)
        })
    }
    const handelPutRequest=()=>{
        axios.put('https://jsonplaceholder.typicode.com/post/1',{
            title:'HZ',
            body:"this is JA section",
            userId:1
        })
    }


}