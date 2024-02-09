import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { addFavorites } from "../../api/request";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavoritesRedux,
  getIdUserRedux,
  getUserToken,
} from "../../redux/selectors/selectors";
import { setFavoritesError } from "../../redux/actions/error-actions";
import { useFetchFavoriteList } from "../../redux/async-actions/async-actions";

interface StarFavoriteButtonProps {
  idFilm: number;
}

export const StarFavoriteButton: React.FC<StarFavoriteButtonProps> = ({
  idFilm,
}) => {
  const dispatchRedux = useDispatch();

  const favoritesList = useSelector(getFavoritesRedux);
  const userToken = useSelector(getUserToken);
  const userID = useSelector(getIdUserRedux);
  const numericIdFilm = parseInt(idFilm, 10);
  const [isFavorite, setIsFavorite] = useState(false);
  const fetchFavoriteList = useFetchFavoriteList();
  useEffect(() => {
    if (favoritesList && favoritesList.data && favoritesList.data.results) {
      const favoriteIdsArray = Array.isArray(favoritesList.data.results)
        ? favoritesList.data.results.map((favorite) => favorite.id)
        : [];
      setIsFavorite(favoriteIdsArray.includes(numericIdFilm));
    }
  }, [favoritesList, numericIdFilm]);

  const handleStarClick = async () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    dispatchRedux(setFavoritesError(false));
    try {
      await addFavorites(
        userToken ?? "",
        Number(userID) ?? 1,
        numericIdFilm,
        isFavorite
      );
      dispatchRedux(setFavoritesError(false));
      dispatchRedux(fetchFavoriteList);
    } catch (error) {
      setIsFavorite((prevIsFavorite) => !prevIsFavorite);
      dispatchRedux(setFavoritesError(true));
      console.error("Ошибка при добавлении в избранное:", error);
    }
  };

  return (
    <IconButton
      onClick={handleStarClick}
      color={isFavorite ? "primary" : "default"}
    >
      {isFavorite ? <StarIcon /> : <StarBorderIcon />}
    </IconButton>
  );
};
