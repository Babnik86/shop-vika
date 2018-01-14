<template>
    <v-app>
        <v-navigation-drawer
                fixed
                :mini-variant="miniVariant"
                :clipped="clipped"
                v-model="drawer"
                app
                dark class="grey darken-3"
        >
            <cat-list></cat-list>
        </v-navigation-drawer>
        <v-toolbar fixed app :clipped-left="clipped" dark color="grey darken-3">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
            <v-btn icon @click.stop="clipped = !clipped">
                <v-icon>web</v-icon>
            </v-btn>
            <v-btn icon @click.stop="fixed = !fixed">
                <v-icon>remove</v-icon>
            </v-btn>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop="rightDrawer = !rightDrawer">
                <v-icon>menu</v-icon>
            </v-btn>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <v-slide-y-transition mode="out-in">
                    <v-card>
                        <v-card-text><router-view :key="$route.fullPath"></router-view></v-card-text>
                    </v-card>

                </v-slide-y-transition>
            </v-container>
        </v-content>
        <v-footer :fixed="fixed" app>
            <span>&copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
    import CatList from './components/CatList'

    export default {
        data() {
            return {
                clipped: false,
                drawer: true,
                fixed: false,
                items: [
                    {icon: 'bubble_chart', title: 'Inspire'}
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'Vuetify.js',
                products: []
            }
        },
        components: {
            CatList
        }
    }
</script>
