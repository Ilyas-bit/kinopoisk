import { ChangeEvent } from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { updatePage } from "../../redux/actions/user-actions";
import {
  getCurrentPageNumber,
  getTotalPages,
} from "../../redux/selectors/selectors";

export function BasicPagination() {
  const dispatchRedux = useDispatch();
  const currentPageNumber = useSelector(getCurrentPageNumber);
  const totalPages = useSelector(getTotalPages);

  const changePage = (_: ChangeEvent<unknown>, newPage: number) => {
    dispatchRedux(updatePage(newPage));
  };
  if (!totalPages) {
    return;
  }
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Pagination
        onChange={changePage}
        siblingCount={1}
        count={totalPages || 1}
        page={currentPageNumber || 1}
        sx={{ width: "300px" }}
        size="small"
      />
    </Box>
  );
}
