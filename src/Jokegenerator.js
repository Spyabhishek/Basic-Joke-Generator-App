import React, { useEffect, useState } from 'react'
import './jokegenerator.css'

const Jokegenerator = () => {
    const [jokes, setJokes] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const fetchJokes = async () => {
        setIsLoading(true)
        const res = await fetch('https://api.chucknorris.io/jokes/random')
        const data = await res.json()
        
        setJokes(data)
        setIsLoading(false)
    };
    useEffect(() => {
        fetchJokes()
    }, [])
    return (
        <>
            <div className='jokeapp'>
                <h1>
                    Random Jokes Generator 😂😄
                </h1>
                {isLoading ? (<h3>Loading....</h3>) : (<p>{jokes.value}</p>)}
                <button onClick={fetchJokes}>Generate new jokes</button>
            </div>
        </>
    )
}

export default Jokegenerator