import { Metadata } from "next";
import React from "react";
import Movie from "../../components/movie";
import styles from "../../Styles/home.module.css";
import { API_URL } from "../constants";

export const metadata :Metadata = {
    title: "Home",
}

async function getMovies() {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
            ))}
        </div>
    );
}