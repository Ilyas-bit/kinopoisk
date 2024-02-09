import { useContext } from "react";
import Cookies from "js-cookie";
import Box from "@mui/system/Box";
import { Typography } from "@mui/material";
import { FiltersInterface } from "../interfaces/interfaces-context";
import { SidebarCategoryFilter } from "../components/SidebarCategoryFilter/SidebarCategoryFilter";
import { CustomAlerts } from "../components/custom-alert/custom-alert";
import { MovieGridListContainer } from "../containers/movie-grid-list-container";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, getUserToken } from "../redux/selectors/selectors";
import { getFavoritesError } from "../redux/selectors/error-selectors";

export function MoviesPageWithSorting() {
  const userToken = useSelector(getUserToken);
  const userId = useSelector(getUserId);
  const favoriteError = useSelector(getFavoritesError);
  if (!userToken)
    return (
      <Typography sx={{ textAlign: "center" }} variant="h5" gutterBottom>
        Введите токен
      </Typography>
    );
  if (userId?.data?.status_code) {
    return (
      <Typography sx={{ textAlign: "center" }} variant="h5" gutterBottom>
        ОШИБКА! Введите верный токен
      </Typography>
    );
  }
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SidebarCategoryFilter></SidebarCategoryFilter>
        {favoriteError ? (
          <CustomAlerts
            type={"error"}
            text={"ОШИБКА! Не добавлено в избранное"}
          ></CustomAlerts>
        ) : (
          <></>
        )}
        <MovieGridListContainer></MovieGridListContainer>
      </Box>
    </>
  );
}
