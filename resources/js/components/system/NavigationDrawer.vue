<template>
  <v-navigation-drawer
    v-model="getPrimaryDrawer.model"
    :permanent="getPrimaryDrawer.type == 'permanent'"
    :temporary="getPrimaryDrawer.type == 'temporary'"
    :clipped="getPrimaryDrawer.clipped"
    :floating="getPrimaryDrawer.floating"
    :mini-variant="getPrimaryDrawer.mini"
    absolute
    overflow
    touchless
    app
  >
    <v-system-bar></v-system-bar>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPK0WS_2F91vdWHQZeCzqx309wPh6b3yBWtw&usqp=CAU"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-toolbar>

    <v-toolbar flat class="transparent">
      <h2>{{$appConfig.titleApp}}</h2>
    </v-toolbar>

    <v-list dense class="mb-5">
      <v-divider />
      <v-list-item
        v-for="route in routeNavigationDrawer"
        :to="route.to"
        :key="route.to"
      >
        <v-list-item-action>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="route.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list dense>
      <v-divider />
      <v-subheader settings />
      <v-list-item
        v-for="route in routeNavigationDrawerFooter"
        :to="route.to"
        :key="route.to"
      >
        <v-list-item-action>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="route.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';

  const {
    mapGetters: mapGettersAppSettings,
    mapActions: mapActionsAppSettings,
  } = createNamespacedHelpers('appSettings');

  import { routeNavigationDrawer, routeNavigationDrawerFooter } from '@/routes';

  export default {
    name: 'NavigationDrawer',
    data: () => ({
      routeNavigationDrawer,

      routeNavigationDrawerFooter,
    }),
    methods: {
      ...mapActionsAppSettings([
        'toggleDarkAction',
        'setPrimaryDrawerAction',

        'setFooterAction',
      ]),
      goRoute(route) {
        this.$route.push(route);
      },
    },

    computed: {
      ...mapGettersAppSettings([
        'getDark',
        'getDrawers',
        'getPrimaryDrawer',
        'getFooter',
      ]),
    },
  };
</script>

<style scoped></style>
<!--:src="require('../assets/logo.svg')"-->
