import { useEffect, useState } from "react"
import { data, useLoaderData } from "react-router-dom"

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/sah-lishi')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     }
    //     )
    // }, [])
    const data = useLoaderData()
    return (
        <div className="text-center m-4 bg-pink-300">Github folowers {data.followers}
        <img src={data.avatar_url} alt="Git pic" width={250} />
        </div>
    )
}

export default Github
export const githubInfoLoader = async () => {
    const respomse = await fetch('https://api.github.com/users/sah-lishi')
    return respomse.json()
}