import { useState } from "react";
import { PAGE_JUMPER_ACTIONS } from "./constants/action";

export const PageInput = ({ onAction }) => {
  const [pageValue, setPageValue] = useState("");
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
      }}
    >
      <input
        value={pageValue}
        type="number"
        onKeyDown={(event) => {
          console.log(event);
          if (event.code === 'Enter') {
            onAction({
              type: PAGE_JUMPER_ACTIONS.SET_CURRENT_PAGE,
              payload: {
                currentPage: parseInt(pageValue, 10),
              },
            });
            setPageValue("");
          }
        }}
        onChange={(event) => setPageValue(event.target.value)}
      />
      <label>Page</label>
    </div>
  );
};
