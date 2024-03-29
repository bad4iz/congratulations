import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

import state from "./state";

export const appSettings = {
    actions,
    getters,
    mutations,
    state,
    namespaced: true,
};
