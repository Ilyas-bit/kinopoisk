import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/user-actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface PopapModalProps {
  isVisibleModal: boolean;
  handleClose: () => void;
}

const PopapModal: React.FC<PopapModalProps> = ({
  isVisibleModal,
  handleClose,
}) => {
  const dispatchRedux = useDispatch();
  const [openTokenModal, setOpenTokenModal] = useState(false);
  const [token, setToken] = useState("");

  const changeToken = (token: string) => {
    dispatchRedux(login(token));
  };

  const handleOpenTokenModal = () => setOpenTokenModal(true);
  const handleCloseTokenModal = () => setOpenTokenModal(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  return (
    <div>
      <Modal
        open={isVisibleModal}
        onClose={() => {
          handleClose();
          handleCloseTokenModal();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {!openTokenModal && (
            <>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ mb: 2 }}
              >
                Запросить токен
              </Typography>
              <TextField sx={{ mb: 2 }} fullWidth label="почта" id="email" />
            </>
          )}
          {openTokenModal && (
            <>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ mb: 2 }}
              >
                Введите токен
              </Typography>
              <TextField
                sx={{ mb: 2 }}
                fullWidth
                label="токен"
                id="token"
                onChange={handleChange}
              />
            </>
          )}
          <Box sx={{ justifyContent: "flex-end" }} display={"flex"} gap={1}>
            {!openTokenModal && (
              <>
                <Button
                  variant="text"
                  onClick={() => {
                    handleClose();
                    handleCloseTokenModal();
                  }}
                >
                  ОТМЕНА
                </Button>
                <Button variant="text" onClick={handleOpenTokenModal}>
                  ЗАПРОСИТЬ
                </Button>
              </>
            )}
            {openTokenModal && (
              <>
                <Button
                  onClick={() => {
                    handleClose();
                    handleCloseTokenModal();
                  }}
                  variant="text"
                >
                  ОТМЕНА
                </Button>
                <Button
                  variant="text"
                  onClick={() => {
                    handleClose();
                    handleCloseTokenModal();
                    Cookies.set("token", token);
                    changeToken(token);
                  }}
                >
                  ОК
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default PopapModal;
