import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

import { getIdUser } from "../api/request";
import { HeaderLayout } from "../components/header/header-layout";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/user-actions";
import { getUserId, getUserToken } from "../redux/selectors/selectors";
import { useFetchIdUser } from "../redux/async-actions/async-actions";

const HeaderContainer: React.FC = () => {
  const dispatchRedux = useDispatch();
  const userToken = useSelector(getUserToken);
  const userID = useSelector(getUserId);

  const fethIdUser = useFetchIdUser();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (!userToken) {
      setOpen(true);
    }
    if (userToken) {
      setOpen(false);
    }
  }, [userToken]);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!userToken) {
      dispatchRedux(login(token));
    }
  }, [userToken]);

  useEffect(() => {
    if (userToken) {
      dispatchRedux(fethIdUser);
    }
  }, [userToken, dispatchRedux]);

  return (
    <HeaderLayout
      title={""}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  );
};

export { HeaderContainer };
