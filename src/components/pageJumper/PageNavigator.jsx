import { PAGE_JUMPER_ACTIONS } from "./constants/action";

export const PageNavigator = ({ totalPages, currentPage, onAction }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
      }}
    >
      <button
        disabled={currentPage === 1}
        onClick={() => {
          onAction({
            type: PAGE_JUMPER_ACTIONS.SET_CURRENT_PAGE,
            payload: {
              currentPage: currentPage - 1,
            },
          });
        }}
      >
        {"<"}
      </button>
      {[...new Array(totalPages)].map((_, index) => (
        <button
          key={index}
          style={{
            borderRadius: "4px",
            cursor: "pointer",
            border:
              currentPage === index + 1
                ? "1px solid blue"
                : "1px solid lightGray",
          }}
          onClick={() => {
            onAction({
              type: PAGE_JUMPER_ACTIONS.SET_CURRENT_PAGE,
              payload: {
                currentPage: index + 1,
              },
            });
          }}
        >
          {index + 1}
        </button>
      ))}
      <button
        style={{
          cursor: "pointer",
        }}
        disabled={currentPage === totalPages}
        onClick={() => {
          onAction({
            type: PAGE_JUMPER_ACTIONS.SET_CURRENT_PAGE,
            payload: {
              currentPage: currentPage + 1,
            },
          });
        }}
      >
        {">"}
      </button>
    </div>
  );
};
