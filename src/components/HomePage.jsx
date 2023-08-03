import React from "react";
import AnimeCard from "./AnimeCard";

const HomePage = ({recommendations}) => {
    console.log(recommendations)
    return (
        <main>
            <h2>Recommend Anime: </h2>
            <div className="anime-list">
                {recommendations.map(anime => (
                    	<article className="anime-card"> 
                        <a 
                            href={anime.url} 
                            target="_blank" 
                            rel="noreferrer">
                            <figure>
                                <img 
                                    src={anime.entry[0].images.jpg.large_image_url} 
                                    alt="Anime Image" />
                            </figure>
                            <h3>{ anime.entry[0].title }</h3>
                        </a>
                    </article>
                ))}
            </div>
        </main>
    )
}

export default HomePage;

