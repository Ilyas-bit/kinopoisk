import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getCurrentPageNumber,
  getUserToken,
} from "../../redux/selectors/selectors";
import { setCategory, setSearchTerm } from "../../redux/actions/user-actions";
import { useFetchMovieList } from "../../redux/async-actions/async-actions";

export function SearchBar() {
  const dispatchRedux = useDispatch();
  const currentPageNumber = useSelector(getCurrentPageNumber);
  const selectedСategory = useSelector(getCategory);

  const userToken = useSelector(getUserToken);
  const [searchTerm, setSearchTermState] = useState("");
  const [isClicking, setIsClicking] = useState(false);

  const fetchMovieList = useFetchMovieList();

  useEffect(() => {
    setSearchTermState("");
  }, [selectedСategory]);

  useEffect(() => {
    const fetchMovieCategoryList = () => {
      try {
        dispatchRedux(setCategory("search"));
        dispatchRedux(setSearchTerm(searchTerm));
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm !== "") {
      fetchMovieCategoryList();
    }
  }, [currentPageNumber, isClicking, userToken, isClicking]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTermState(e.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{ mb: 4, display: "flex", alignItems: "center" }}
      onSubmit={(e) => e.preventDefault()}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Найти фильм"
        value={searchTerm}
        onChange={handleSearch}
      />
      <IconButton
        onClick={() => setIsClicking(!isClicking)}
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
