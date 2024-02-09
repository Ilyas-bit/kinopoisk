import Box from "@mui/system/Box";
import { Paper } from "@mui/material";
import { HeaderWithCloseButton } from "../header-with-close-button/header-with-close-button";
import { SearchBar } from "../search-input/search-input";
import SortFilter from "../sort-filter/sort-filter";
import { RangeSlider } from "../range-slider/range-slider";
import GenreSelection from "../genre-selection/genre-selection";
import { BasicPagination } from "../pagination/pagination";
import { useSelector } from "react-redux";
import { getCategory } from "../../redux/selectors/selectors";
import { useEffect } from "react";

export function SidebarCategoryFilter() {
  const selectedСategory = useSelector(getCategory);
  useEffect(() => {}, [selectedСategory]);

  return (
    <Box
      component="section"
      sx={{ position: "sticky", top: 65, p: 2, height: "85vh", shadows: 2 }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          width: "22vw",
          height: "96%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <HeaderWithCloseButton></HeaderWithCloseButton>
          <SearchBar></SearchBar>
          <SortFilter></SortFilter>
          <RangeSlider></RangeSlider>
          <GenreSelection></GenreSelection>
        </Box>

        <BasicPagination></BasicPagination>
      </Paper>
    </Box>
  );
}
