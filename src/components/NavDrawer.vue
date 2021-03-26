<template>
  <v-navigation-drawer v-model="navModel" app overflow></v-navigation-drawer>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';

  const {
    mapGetters: mapGettersAppSettings,
    mapActions: mapActionsAppSettings,
  } = createNamespacedHelpers('appSettings');

  export default {
    name: 'NavDrawer',
    computed: {
      ...mapGettersAppSettings({
        navDrawer: 'getNavDrawer',
      }),
      navModel: {
        get() {
          return this.navDrawer;
        },
        set(val) {
          if (val) {
            return;
          }
          this.setNavDrawer(val);
        },
      },
    },
    methods: {
      ...mapActionsAppSettings({
        setNavDrawer: 'setNavDrawerAction',
      }),
    },
  };
</script>

<style scoped></style>
