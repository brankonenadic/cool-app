import React from 'react';
import Card from '../components/ui/Card';
import classes from './Home.module.css';
import movieList from '../moviesDb'

const Home = () => {
    const { genres, movies } = movieList;


    const theMovie = movies.map((movie) => {
        return (
            <Card
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
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
