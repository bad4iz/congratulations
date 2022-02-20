require("./bootstrap");

import Vue from "vue";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);

import { router } from "./routes";
import App from "./App.vue";

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import vuetify from "./plugins/vuetify";
import store from "./store";
import configPlugin, { configEnv } from "./plugins/configEnv";

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: configEnv.appUrlGraphql,
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

Vue.use(configPlugin);

const app = new Vue({
    router,
    el: "#app",
    apolloProvider,
    vuetify,
    store,
    render: (h) => h(App),
});
