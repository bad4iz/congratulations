<template>
  <v-app :dark="getDark">
    <NavigationDrawer />
    <v-app-bar
      app
      :clipped-left="getPrimaryDrawer.clipped"
      dark
      absolute
      color="red darken-4"
    >
      <v-app-bar-nav-icon
        v-if="getPrimaryDrawer.type !== 'permanent'"
        @click.stop="setPrimaryDrawerAction({ model: !getPrimaryDrawer.model })"
      />
      <v-toolbar-title>{{ $appConfig.titleApp }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer :inset="getFooter.inset" app>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';

  const {
    mapGetters: mapGettersAppSettings,
    mapActions: mapActionsAppSettings,
  } = createNamespacedHelpers('appSettings');

  export default {
    name: 'App',
    components: {
      NavigationDrawer: () => import('@/components/NavigationDrawer'),
    },
    data: () => ({}),
    methods: {
      ...mapActionsAppSettings([
        'toggleDarkAction',
        'setPrimaryDrawerAction',
        'setFooterAction',
      ]),
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
