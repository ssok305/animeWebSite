import React from 'react'
import AnimeCard from './AnimeCard';
import HomePage from './HomePage';

const MainContent = (props) => {
	return (
		<main>
			<div className="main-head">
				<form 
					className="search-box"
					onSubmit={props.HandleSearch}>
					<input 
						type="search"
						placeholder="Search for an anime..."
						required
						value={props.search}
						onChange={e => props.SetSearch(e.target.value)}/>
				</form>
			</div>
			<div className="anime-list">
				{props.animeList.map(anime => (
					<div>
						<AnimeCard
							anime={anime}
							key={anime.mal_id} />
					</div>
				))}
			</div>
		</main>
	)
}

export default MainContent
