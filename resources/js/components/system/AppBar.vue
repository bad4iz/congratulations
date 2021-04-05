<template>
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
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';

  const {
    mapGetters: mapGettersAppSettings,
    mapActions: mapActionsAppSettings,
  } = createNamespacedHelpers('appSettings');

  export default {
    name: 'AppBar',
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

<style scoped>

</style>
