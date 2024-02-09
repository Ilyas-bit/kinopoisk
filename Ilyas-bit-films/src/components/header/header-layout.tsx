import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import PopapModal from "../popup-modal/popap-modal";

interface HeaderLayoutProps {
  title: string;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({
  title,
  open,
  handleOpen,
  handleClose,
}) => {
  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 999 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Фильмы!{title ? ` - ${title}` : ""}
          </Typography>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            onClick={handleOpen}
          >
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <PopapModal isVisibleModal={open} handleClose={handleClose}></PopapModal>
    </Box>
  );
};

export { HeaderLayout };
