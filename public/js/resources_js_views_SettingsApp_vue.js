(self["webpackChunktemplate_laravel_spa_vue_qraphql_vuetify"] =
    self["webpackChunktemplate_laravel_spa_vue_qraphql_vuetify"] || []).push([
    ["resources_js_views_SettingsApp_vue"],
    {
        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SettingsApp.vue?vue&type=script&lang=js&":
            /*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SettingsApp.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! vuex */ "./node_modules/vuex/dist/vuex.esm.js"
                );
                function ownKeys(object, enumerableOnly) {
                    var keys = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var symbols = Object.getOwnPropertySymbols(object);
                        if (enumerableOnly)
                            symbols = symbols.filter(function (sym) {
                                return Object.getOwnPropertyDescriptor(
                                    object,
                                    sym
                                ).enumerable;
                            });
                        keys.push.apply(keys, symbols);
                    }
                    return keys;
                }

                function _objectSpread(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i] != null ? arguments[i] : {};
                        if (i % 2) {
                            ownKeys(Object(source), true).forEach(function (
                                key
                            ) {
                                _defineProperty(target, key, source[key]);
                            });
                        } else if (Object.getOwnPropertyDescriptors) {
                            Object.defineProperties(
                                target,
                                Object.getOwnPropertyDescriptors(source)
                            );
                        } else {
                            ownKeys(Object(source)).forEach(function (key) {
                                Object.defineProperty(
                                    target,
                                    key,
                                    Object.getOwnPropertyDescriptor(source, key)
                                );
                            });
                        }
                    }
                    return target;
                }

                function _defineProperty(obj, key, value) {
                    if (key in obj) {
                        Object.defineProperty(obj, key, {
                            value: value,
                            enumerable: true,
                            configurable: true,
                            writable: true,
                        });
                    } else {
                        obj[key] = value;
                    }
                    return obj;
                }

                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //

                var _createNamespacedHelp = (0,
                    vuex__WEBPACK_IMPORTED_MODULE_0__.createNamespacedHelpers)(
                        "appSettings"
                    ),
                    mapGettersAppSettings = _createNamespacedHelp.mapGetters,
                    mapActionsAppSettings = _createNamespacedHelp.mapActions;

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    name: "SettingsApp",
                    methods: _objectSpread(
                        {},
                        mapActionsAppSettings([
                            "toggleDarkAction",
                            "setPrimaryDrawerAction",
                            "setFooterAction",
                        ])
                    ),
                    computed: _objectSpread(
                        {},
                        mapGettersAppSettings([
                            "getDark",
                            "getDrawers",
                            "getPrimaryDrawer",
                            "getFooter",
                        ])
                    ),
                };

                /***/
            },

        /***/ "./resources/js/views/SettingsApp.vue":
            /*!********************************************!*\
  !*** ./resources/js/views/SettingsApp.vue ***!
  \********************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _SettingsApp_vue_vue_type_template_id_36161faf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./SettingsApp.vue?vue&type=template&id=36161faf&scoped=true& */ "./resources/js/views/SettingsApp.vue?vue&type=template&id=36161faf&scoped=true&"
                );
                /* harmony import */ var _SettingsApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./SettingsApp.vue?vue&type=script&lang=js& */ "./resources/js/views/SettingsApp.vue?vue&type=script&lang=js&"
                );
                /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
                );

                /* normalize component */
                var component = (0,
                _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
                    _SettingsApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
                    _SettingsApp_vue_vue_type_template_id_36161faf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
                    _SettingsApp_vue_vue_type_template_id_36161faf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
                    false,
                    null,
                    "36161faf",
                    null
                );

                /* hot reload */
                if (false) {
                    var api;
                }
                component.options.__file = "resources/js/views/SettingsApp.vue";
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    component.exports;

                /***/
            },

        /***/ "./resources/js/views/SettingsApp.vue?vue&type=script&lang=js&":
            /*!*********************************************************************!*\
  !*** ./resources/js/views/SettingsApp.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsApp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SettingsApp.vue?vue&type=script&lang=js&"
                );
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default;

                /***/
            },

        /***/ "./resources/js/views/SettingsApp.vue?vue&type=template&id=36161faf&scoped=true&":
            /*!***************************************************************************************!*\
  !*** ./resources/js/views/SettingsApp.vue?vue&type=template&id=36161faf&scoped=true& ***!
  \***************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () =>
                            /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsApp_vue_vue_type_template_id_36161faf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
                        /* harmony export */ staticRenderFns: () =>
                            /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsApp_vue_vue_type_template_id_36161faf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsApp_vue_vue_type_template_id_36161faf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsApp.vue?vue&type=template&id=36161faf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SettingsApp.vue?vue&type=template&id=36161faf&scoped=true&"
                );

                /***/
            },

        /***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SettingsApp.vue?vue&type=template&id=36161faf&scoped=true&":
            /*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SettingsApp.vue?vue&type=template&id=36161faf&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () => /* binding */ render,
                        /* harmony export */ staticRenderFns: () =>
                            /* binding */ staticRenderFns,
                        /* harmony export */
                    }
                );
                var render = function () {
                    var _vm = this;
                    var _h = _vm.$createElement;
                    var _c = _vm._self._c || _h;
                    return _c(
                        "v-layout",
                        { attrs: { "align-center": "", "justify-center": "" } },
                        [
                            _c(
                                "v-flex",
                                { attrs: { xs10: "" } },
                                [
                                    _c(
                                        "v-card",
                                        [
                                            _c(
                                                "v-card-text",
                                                [
                                                    _c(
                                                        "v-layout",
                                                        {
                                                            attrs: {
                                                                row: "",
                                                                wrap: "",
                                                            },
                                                        },
                                                        [
                                                            _c(
                                                                "v-flex",
                                                                {
                                                                    attrs: {
                                                                        xs12:
                                                                            "",
                                                                        md6: "",
                                                                    },
                                                                },
                                                                [
                                                                    _c("span", [
                                                                        _vm._v(
                                                                            "Scheme"
                                                                        ),
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                        "v-switch",
                                                                        {
                                                                            attrs: {
                                                                                hint:
                                                                                    "This toggles the global state of the Vuetify theme",
                                                                                label:
                                                                                    "Vuetify Theme Dark",
                                                                                "persistent-hint":
                                                                                    "",
                                                                            },
                                                                            model: {
                                                                                value:
                                                                                    _vm
                                                                                        .$vuetify
                                                                                        .theme
                                                                                        .dark,
                                                                                callback: function (
                                                                                    $$v
                                                                                ) {
                                                                                    _vm.$set(
                                                                                        _vm
                                                                                            .$vuetify
                                                                                            .theme,
                                                                                        "dark",
                                                                                        $$v
                                                                                    );
                                                                                },
                                                                                expression:
                                                                                    "$vuetify.theme.dark",
                                                                            },
                                                                        }
                                                                    ),
                                                                ],
                                                                1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                                "v-flex",
                                                                {
                                                                    attrs: {
                                                                        xs12:
                                                                            "",
                                                                        md6: "",
                                                                    },
                                                                },
                                                                [
                                                                    _c("span", [
                                                                        _vm._v(
                                                                            "Drawer"
                                                                        ),
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                        "v-radio-group",
                                                                        {
                                                                            attrs: {
                                                                                value:
                                                                                    _vm
                                                                                        .getPrimaryDrawer
                                                                                        .type,
                                                                                column:
                                                                                    "",
                                                                            },
                                                                            on: {
                                                                                change: function (
                                                                                    value
                                                                                ) {
                                                                                    return _vm.setPrimaryDrawerAction(
                                                                                        {
                                                                                            type: value,
                                                                                        }
                                                                                    );
                                                                                },
                                                                            },
                                                                        },
                                                                        _vm._l(
                                                                            _vm.getDrawers,
                                                                            function (
                                                                                drawer
                                                                            ) {
                                                                                return _c(
                                                                                    "v-radio",
                                                                                    {
                                                                                        key: drawer,
                                                                                        attrs: {
                                                                                            label: drawer,
                                                                                            value: drawer.toLowerCase(),
                                                                                            primary:
                                                                                                "",
                                                                                        },
                                                                                    }
                                                                                );
                                                                            }
                                                                        ),
                                                                        1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                        "v-switch",
                                                                        {
                                                                            attrs: {
                                                                                value:
                                                                                    _vm
                                                                                        .getPrimaryDrawer
                                                                                        .clipped,
                                                                                label:
                                                                                    "Clipped",
                                                                                primary:
                                                                                    "",
                                                                            },
                                                                            on: {
                                                                                change: function (
                                                                                    $event
                                                                                ) {
                                                                                    return _vm.setPrimaryDrawerAction(
                                                                                        {
                                                                                            clipped: !_vm
                                                                                                .getPrimaryDrawer
                                                                                                .clipped,
                                                                                        }
                                                                                    );
                                                                                },
                                                                            },
                                                                        }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                        "v-switch",
                                                                        {
                                                                            attrs: {
                                                                                value:
                                                                                    _vm
                                                                                        .getPrimaryDrawer
                                                                                        .floating,
                                                                                label:
                                                                                    "Floating",
                                                                                primary:
                                                                                    "",
                                                                            },
                                                                            on: {
                                                                                change: function (
                                                                                    $event
                                                                                ) {
                                                                                    return _vm.setPrimaryDrawerAction(
                                                                                        {
                                                                                            floating: !_vm
                                                                                                .getPrimaryDrawer
                                                                                                .floating,
                                                                                        }
                                                                                    );
                                                                                },
                                                                            },
                                                                        }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                        "v-switch",
                                                                        {
                                                                            attrs: {
                                                                                value:
                                                                                    _vm
                                                                                        .getPrimaryDrawer
                                                                                        .mini,
                                                                                label:
                                                                                    "Mini",
                                                                                primary:
                                                                                    "",
                                                                            },
                                                                            on: {
                                                                                change: function (
                                                                                    $event
                                                                                ) {
                                                                                    return _vm.setPrimaryDrawerAction(
                                                                                        {
                                                                                            mini: !_vm
                                                                                                .getPrimaryDrawer
                                                                                                .mini,
                                                                                        }
                                                                                    );
                                                                                },
                                                                            },
                                                                        }
                                                                    ),
                                                                ],
                                                                1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                                "v-flex",
                                                                {
                                                                    attrs: {
                                                                        xs12:
                                                                            "",
                                                                        md6: "",
                                                                    },
                                                                },
                                                                [
                                                                    _c("span", [
                                                                        _vm._v(
                                                                            "Footer"
                                                                        ),
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                        "v-switch",
                                                                        {
                                                                            attrs: {
                                                                                id:
                                                                                    "insert",
                                                                                value:
                                                                                    _vm
                                                                                        .getFooter
                                                                                        .inset,
                                                                                label:
                                                                                    "Inset",
                                                                                primary:
                                                                                    "",
                                                                            },
                                                                            on: {
                                                                                change: function (
                                                                                    $event
                                                                                ) {
                                                                                    return _vm.setFooterAction(
                                                                                        {
                                                                                            inset: !_vm
                                                                                                .getFooter
                                                                                                .inset,
                                                                                        }
                                                                                    );
                                                                                },
                                                                            },
                                                                        }
                                                                    ),
                                                                ],
                                                                1
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                ],
                                                1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                                "v-card-actions",
                                                [
                                                    _c("v-spacer"),
                                                    _vm._v(" "),
                                                    _c("v-btn", [
                                                        _vm._v("Cancel"),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                        "v-btn",
                                                        {
                                                            attrs: {
                                                                color:
                                                                    "primary",
                                                            },
                                                        },
                                                        [_vm._v("Submit")]
                                                    ),
                                                ],
                                                1
                                            ),
                                        ],
                                        1
                                    ),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                };
                var staticRenderFns = [];
                render._withStripped = true;

                /***/
            },
    },
]);
