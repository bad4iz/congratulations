<template>
        <v-app>
            <NavigationDrawer />

            <AppBar />

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
import AppBar from './components/system/AppBar';
import NavigationDrawer from './components/system/NavigationDrawer';

const {
    mapGetters: mapGettersAppSettings,
    mapActions: mapActionsAppSettings,
} = createNamespacedHelpers('appSettings');

export default {
    name: 'App',
    components: {
        NavigationDrawer,
        AppBar,
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

<style scoped>

</style>
