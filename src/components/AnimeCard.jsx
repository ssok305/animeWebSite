import React from 'react'

const AnimeCard = ({anime}) => {
	return (
		<article className="anime-card"> 
			<a 
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={anime.images.jpg.large_image_url} 
						alt="Anime Image" />
				</figure>
				<h3>{ anime.title }</h3>
			</a>
		</article>
	)
}

export default AnimeCard
