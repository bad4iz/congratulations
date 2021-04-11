<template>
  <v-layout align-center justify-center>
    <v-flex xs10>
      <v-card>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <span>Scheme</span>
                <v-switch
                    v-model="$vuetify.theme.dark"
                    hint="This toggles the global state of the Vuetify theme"
                    label="Vuetify Theme Dark"
                    persistent-hint
                ></v-switch>
            </v-flex>
            <v-flex xs12 md6>
              <span>Drawer</span>
              <v-radio-group
                :value="getPrimaryDrawer.type"
                @change="(value)=>setPrimaryDrawerAction({type: value})"
                column
              >
                <v-radio
                  v-for="drawer in getDrawers"
                  :key="drawer"
                  :label="drawer"
                  :value="drawer.toLowerCase()"
                  primary
                ></v-radio>
              </v-radio-group>
              <v-switch
                :value="getPrimaryDrawer.clipped"
                @change="
                  setPrimaryDrawerAction({ clipped: !getPrimaryDrawer.clipped })
                "
                label="Clipped"
                primary
              ></v-switch>
              <v-switch
                :value="getPrimaryDrawer.floating"
                @change="
                  setPrimaryDrawerAction({
                    floating: !getPrimaryDrawer.floating
                  })
                "
                label="Floating"
                primary
              ></v-switch>
              <v-switch
                :value="getPrimaryDrawer.mini"
                @change="
                  setPrimaryDrawerAction({ mini: !getPrimaryDrawer.mini })
                "
                label="Mini"
                primary
              ></v-switch>
            </v-flex>
            <v-flex xs12 md6>
              <span>Footer</span>
              <v-switch
                id="insert"
                :value="getFooter.inset"
                @change="setFooterAction({ inset: !getFooter.inset })"
                label="Inset"
                primary
              ></v-switch>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn>Cancel</v-btn>
          <v-btn color="primary">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';

  const {
    mapGetters: mapGettersAppSettings,
    mapActions: mapActionsAppSettings,
  } = createNamespacedHelpers('appSettings');

  export default {
    name: 'SettingsApp',
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

<style scoped></style>
