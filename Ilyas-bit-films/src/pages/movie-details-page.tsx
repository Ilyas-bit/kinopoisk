import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getMovieListByType } from "../api/request";
import { useDispatch, useSelector } from "react-redux";
import {
  getArtistsList,
  getDetailsList,
  getIdFilm,
  getUserToken,
} from "../redux/selectors/selectors";
import { StarFavoriteButton } from "../components/star-favorite-button/star-favorite-button";
import {
  setArristsList,
  setDetailsList,
  setIdFilm,
} from "../redux/actions/user-actions";
import {
  useFetchArtistsList,
  useFetchDetailsList,
} from "../redux/async-actions/async-actions";

export function MovieDetailsPage() {
  const navigate = useNavigate();
  const { idFilm } = useParams();
  const numericIdFilm = parseInt(idFilm, 10);
  const dispatchRedux = useDispatch();
  dispatchRedux(setIdFilm(numericIdFilm));

  const userToken = useSelector(getUserToken);
  const detailsList = useSelector(getDetailsList);
  const artistsList = useSelector(getArtistsList);
  const idFilmRedux = useSelector(getIdFilm);

  const fetchDetailsList = useFetchDetailsList();
  const fetchArtistsList = useFetchArtistsList();
  const navigateHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!userToken) {
      return;
    }
    dispatchRedux(fetchDetailsList);
    dispatchRedux(fetchArtistsList);
  }, [userToken, idFilmRedux]);

  // if () {
  //   return (
  //     <Box
  //       height="85vh"
  //       width="100%"
  //       display="flex"
  //       justifyContent="center"
  //       alignItems="center"
  //     >
  //       <CircularProgress />
  //     </Box>
  //   );
  // }
  if (idFilmRedux !== detailsList?.data?.id) {
    return (
      <Box
        height="85vh"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Box display="flex" p={2}>
      <Box width={"20%"}>
        {detailsList?.data?.poster_path && (
          <img
            width={"100%"}
            src={
              "https://image.tmdb.org/t/p/w500" + detailsList.data.poster_path
            }
            alt={"картинка"}
          />
        )}
      </Box>
      <Box pl={4} sx={{ width: "40%" }}>
        <Box display="flex" sx={{ alignItems: "center" }} mb={2}>
          <Typography variant="h3" mr={2}>
            {detailsList?.data?.title}
          </Typography>
          <StarFavoriteButton idFilm={idFilmRedux}></StarFavoriteButton>
        </Box>
        <IconButton sx={{ p: 0, mb: 4 }}>
          <ArrowBackIcon
            onClick={navigateHome}
            style={{ fontSize: "2.5rem" }}
          />
        </IconButton>
        {artistsList?.data?.cast.slice(0, 4).map(
          (castMember, index) =>
            castMember?.name && (
              <Typography
                sx={{ p: 0, mb: 2 }}
                key={index}
                variant="h5"
                gutterBottom
              >
                {castMember.name}
              </Typography>
            )
        )}
        <Typography variant="h6" gutterBottom>
          {detailsList?.data?.overview}
        </Typography>
      </Box>
    </Box>
  );
}
