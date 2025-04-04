import { messageActions } from "@/entities/message/models/store/messageSlice";
import { socketActions } from "@/entities/socket/model/store/socketSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...socketActions,
      ...messageActions,
    },
    dispatch
  );
};
