import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography, { BoxOrient } from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import notFoundImage from "./notFound.jpg";
import { StarFavoriteButton } from "../star-favorite-button/star-favorite-button";
import { useSelector } from "react-redux";
import { getFavoritesRedux } from "../../redux/selectors/selectors";

export function CardMovie({ movie, onClick }) {
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`movie/${movie.id}`);
  };
  const favoritesList = useSelector(getFavoritesRedux);
  const styles = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical" as BoxOrient,
    overflow: "hidden",
    WebkitLineClamp: 2,
    fontSize: "20px",
  };
  return (
    favoritesList && (
      <Box
        sx={{
          height: "100%",
          cursor: "pointer",
        }}
        key={movie.id}
      >
        <Card
          key={movie.id}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          {movie.image && (
            <CardMedia
              component="img"
              image={"https://image.tmdb.org/t/p/w500" + movie.image}
              alt="картинка"
              onClick={() => {
                navigateToDetails();
                onClick();
              }}
            />
          )}
          {!movie.image && (
            <CardMedia
              component="img"
              image={notFoundImage}
              // alt="картинка"
              onClick={() => {
                navigateToDetails();
                onClick();
              }}
            />
          )}

          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                style={styles}
                gutterBottom
                variant="h6"
                component="div"
              >
                {movie.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                рейтинг {movie.vote_average.toFixed(1)}
              </Typography>
            </Box>

            <StarFavoriteButton idFilm={movie.id}></StarFavoriteButton>
          </CardContent>
        </Card>
      </Box>
    )
  );
}
