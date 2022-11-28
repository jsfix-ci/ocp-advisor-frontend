import { createSlice } from '@reduxjs/toolkit';
import { CLUSTERS_TABLE_CELL_LAST_SEEN } from '../AppConstants';

// single recommendation page
export const AFFECTED_CLUSTERS_INITIAL_STATE = {
  limit: 50,
  offset: 0,
  text: '',
  // TODO: use a constant instead
  sortIndex: 3,
  sortDirection: null,
  version: [],
};

// recommendations list page
export const RECS_LIST_INITIAL_STATE = {
  limit: 50,
  offset: 0,
  impacting: ['true'],
  // default sorting by total risk
  // TODO: use a constant instead
  sortIndex: 4,
  sortDirection: 'desc',
  rule_status: 'enabled',
};

// clusters list page
export const CLUSTERS_LIST_INITIAL_STATE = {
  limit: 50,
  offset: 0,
  hits: ['all'],
  sortIndex: CLUSTERS_TABLE_CELL_LAST_SEEN,
  sortDirection: 'desc',
  text: '',
  version: [],
};

// single cluster page
export const CLUSTER_RULES_INITIAL_STATE = {
  // default sorting by total risk
  // TODO: use a constant instead
  sortIndex: -1,
  sortDirection: 'desc',
  text: '',
};

const filtersInitialState = {
  affectedClustersState: AFFECTED_CLUSTERS_INITIAL_STATE,
  recsListState: RECS_LIST_INITIAL_STATE,
  clustersListState: CLUSTERS_LIST_INITIAL_STATE,
  clusterRulesState: CLUSTER_RULES_INITIAL_STATE,
};

export const resetFilters = (filters, initialState, updateFilters) => {
  const { limit, offset, sortIndex, sortDirection } = filters;
  updateFilters({
    ...initialState,
    ...(limit !== undefined && { limit }),
    ...(limit !== undefined && { offset }),
    sortIndex,
    sortDirection,
  });
};

const filters = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    // single recommendation page
    updateAffectedClustersFilters(state, action) {
      state.affectedClustersState = action.payload;
    },
    // recommendations list page
    updateRecsListFilters(state, action) {
      state.recsListState = action.payload;
    },
    // clusters list page
    updateClustersListFilters(state, action) {
      state.clustersListState = action.payload;
    },
    // single cluster page
    updateClusterRulesFilters(state, action) {
      state.clusterRulesState = action.payload;
    },
  },
});

export const {
  updateAffectedClustersFilters,
  updateRecsListFilters,
  updateClustersListFilters,
  updateClusterRulesFilters,
} = filters.actions;

export default filters.reducer;
