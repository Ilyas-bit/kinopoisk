// components/movie-grid-list.tsx
import React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import { CardMovie } from "../card-movie/card-movie";
import { useSelector } from "react-redux";
import { getUserToken } from "../../redux/selectors/selectors";

interface MovieGridListProps {
  movieList: Movie[];
  loading: boolean;
  handleMovieClick: (movieId: number) => void;
}
interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
}

export const MovieGridList: React.FC<MovieGridListProps> = ({
  movieList,
  handleMovieClick,
}) => {
  if (!movieList || !handleMovieClick) {
    return;
  }
  const token = useSelector(getUserToken);
  return (
    <Box sx={{ display: "flex" }}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ boxSizing: "border-box", p: 2 }}
      >
        {movieList.map((movie) => (
          <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CardMovie
              onClick={() => {
                handleMovieClick(movie.id);
              }}
              movie={{
                id: movie.id,
                title: movie.title,
                image: movie.poster_path,
                vote_average: movie.vote_average,
              }}
            ></CardMovie>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
