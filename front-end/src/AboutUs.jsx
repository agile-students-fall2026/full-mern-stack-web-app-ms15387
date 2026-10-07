import { useState, useEffect } from "react";

const AboutUs = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_HOSTNAME}/about-us`)
            .then((res) => res.json())
            .then((res) => setData(json))
            .catch((err) => setError("Could not load page: " + err.message))
    }, [])

    if (error) return <p>{error}</p>
    if (!data) return <p>LOADING...</p>

    return (
        <div>
            <h1>{data.title}</h1>
            <img src={data.imageUrl} alt="Me" style={{ maxWidth: "300px" }} />
            {data.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
            ))}
        </div>
    )
}

export default AboutUs