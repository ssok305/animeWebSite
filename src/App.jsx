import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import MainContent from './components/MainContent';
import HomePage from './components/HomePage';



function App() {
	const [animeList, setAnimeList] = useState([]);
	const [topAnime, setTopAnime] = useState([]);
	const [search, setSearch] = useState("");
  const [recommendations, setRecommendataions] = useState([]);

  const baseURL ='https://api.jikan.moe/v4';


  const GetTopAnime = async () => {
    try {
      const response = await fetch(`${baseURL}/top/anime?filter=bypopularity`);
      if (!response.ok) {
        throw new Error('Tasked Failed Successfully.')
      }
      const data = await response.json();
      setTopAnime(data.data.slice(0,10));
    } catch(error){
      console.error('Error fetching anime', error)
    }
      
     
  };

	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

  const FetchAnime = async (query) => {
    try {
      const response = await fetch(`${baseURL}/anime?q=${query}&order_by=title&sort=asc`);
      if (!response.ok) {
        throw new Error('Tasked Failed Successfully.');
      }
      const data = await response.json();
      setAnimeList(data.data);
    } catch (error) {
      console.error('Error fetching anime:', error);
    }

  };


  const GetRecommendations = async () =>{
    try{
      const response = await fetch(`${baseURL}/recommendations/anime?page=1`);
      if(!response.ok){
        throw new Error('Tasked Failed Successfully.')
      }
      
      const data = await response.json();
      setRecommendataions(data.data.slice(0,5));
      console.log(data.data.slice(0,10))
    }catch(error){
      console.error('Error fetching anime',error);
    }

  };

	useEffect(() => {
		GetTopAnime();
    GetRecommendations();
	}, []);

	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				<Sidebar 
					topAnime={topAnime} />
				<MainContent
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={setSearch}
					animeList={animeList} />

			</div>
		</div>
	);
}

export default App;
