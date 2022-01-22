import React from 'react';
import Card from '../components/ui/Card';
import classes from './Home.module.css';
import movieList from '../moviesDb'

const Home = () => {
    const { movies } = movieList;


    const theMovie = movies.map((movie) => {
        return (
            <Card
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                runtime={movie.runtime}
                genres={movie.genres}
                director={movie.director}
                actors={movie.actors}
                plot={movie.plot}
                image={movie.posterUrl}
            />
        )
    });

    return (
        <div className={classes.wrapper}>
            <h1>Home Page</h1>
            <div className={classes.home}>
                {theMovie}
            </div>
        </div>
    )
}

export default Home
