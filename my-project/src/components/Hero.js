import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <div className="mt-20 w-1/3 m-auto text-center">
                <div>
                    <h1 className="text-6xl	font-semibold">Top Quality Digital Products To Explore</h1>
                </div>
                <div className="text-3x1 font-semibold mt-10">
                    <p>teger pellentesque quam vel velit. Integer malesuada. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli.</p>
                </div>
                <div className="mt-10">
                    <Link className="mr-6 py-3 px-6 text-white rounded-full bg-red-600 " to="/">Explore</Link>
                </div>
                <div className="mt-20 h-sreen m-auto">
                <img className="rounded-lg" src="https://sm.ign.com/t/ign_cz/news/s/science-co/science-confirms-uranus-stinks_zxf8.1280.png" alt="" />
                </div>
            </div>
            
        </div>

    )
}

export default Hero