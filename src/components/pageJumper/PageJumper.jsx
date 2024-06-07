//components
import { PageInput } from "./PageInput";
import { PageNavigator } from "./PageNavigator";
import { PageSizeSelector } from "./PageSizeSelector";

//hooks
import { useActionHandler } from "./useActionHandler";

export const PageJumper = ({
  totalRecords,
  onPageChange,
  currentPage: initialCurrentPage = 1,
}) => {
  const { pageState, onAction } = useActionHandler({
    totalRecords,
    initialCurrentPage,
  });

  const { totalPages, currentPage } = pageState;

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
      }}
    >
      <PageNavigator
        totalPages={totalPages}
        currentPage={currentPage}
        onAction={onAction}
      />
      <PageSizeSelector />
      <PageInput onAction={onAction} />
    </div>
  );
};
