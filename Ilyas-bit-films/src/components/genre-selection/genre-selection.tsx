import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { getMovieGenres } from "../../api/request";
import {
  getSelectedGenres,
  getUserId,
  getUserToken,
} from "../../redux/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedGenres } from "../../redux/actions/user-actions";
import { Genre } from "../../interfaces/list-reducer-types";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function GenreSelection() {
  const userToken = useSelector(getUserToken);
  const userId = useSelector(getUserId);
  const selectedGenres = useSelector(getSelectedGenres);
  const dispatchRedux = useDispatch();
  const [movieGenresList, setMovieGenresList] = useState(null);

  useEffect(() => {
    const fetchMovieCategoryList = async () => {
      try {
        if (userId?.data?.id) {
          const genres = await getMovieGenres(userToken ?? "");
          setMovieGenresList(genres);
        }
      } catch (error) {
        console.error("Error fetching movie category list:", error);
      }
    };

    fetchMovieCategoryList();
  }, [userToken, userId]);

  const handleGenreChange = (event: React.SyntheticEvent, values: Genre[]) => {
    dispatchRedux(setSelectedGenres(values));
  };

  return (
    movieGenresList && (
      <Autocomplete
        sx={{ marginBottom: 2 }}
        multiple
        //
        id="checkboxes-tags-demo"
        options={movieGenresList.genres}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.name}
          </li>
        )}
        value={selectedGenres}
        onChange={(event, values) => handleGenreChange(event, values)}
        renderInput={(params) => (
          <TextField {...params} label="Жанры" placeholder="Favorites" />
        )}
      />
    )
  );
}
