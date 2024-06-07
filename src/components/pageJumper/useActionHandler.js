import { useCallback, useState } from "react";
import { PAGE_JUMPER_ACTIONS } from "./constants/action";

const DEFAULT_PAGE_SIZE = 20;

export const useActionHandler = ({ totalRecords, initialCurrentPage }) => {
  const [pageState, setPageState] = useState({
    pageSize: DEFAULT_PAGE_SIZE,
    totalPages: Math.ceil(totalRecords / DEFAULT_PAGE_SIZE),
    currentPage: initialCurrentPage,
  });

  const onAction = useCallback((action) => {
    switch (action.type) {
      case PAGE_JUMPER_ACTIONS.SET_CURRENT_PAGE:
        setPageState((prevPageState) => ({
          ...prevPageState,
          currentPage: Math.min(
            Math.max(action.payload.currentPage, 1),
            prevPageState.totalPages
          ),
        }));
        break;
      default:
        break;
    }
  }, []);
  return {
    pageState,
    onAction,
  };
};
