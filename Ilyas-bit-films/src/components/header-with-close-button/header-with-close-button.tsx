import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { setReset } from "../../redux/actions/user-actions";

export function HeaderWithCloseButton() {
  const dispatchRedux = useDispatch();

  function handleReset() {
    dispatchRedux(setReset());
  }

  return (
    <Box sx={{ display: "flex", marginBottom: 2 }}>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
      >
        Фильмы
      </Typography>
      <IconButton
        onClick={handleReset}
        size="large"
        aria-label="display more actions"
        color="inherit"
        sx={{ p: 0 }}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
}
