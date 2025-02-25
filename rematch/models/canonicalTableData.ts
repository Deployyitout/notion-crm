import { initialCanonicalTableDataState } from "@rematch-notion/state";
import { createModel } from "@rematch/core";
import type { RootModel } from ".";
import { CanonicalTableDataType } from "../../common/types/global";

export const canonicalTableData = createModel<RootModel>()({
  state: initialCanonicalTableDataState as CanonicalTableDataType,
  reducers: {
    setCanonicalTableData: (_state, payload) => {
      return { ...payload, isLoading: false };
    },
    setCanonicalTableColumns: (state, payload) => {
      return { ...state, columns: payload };
    },
  },
});
