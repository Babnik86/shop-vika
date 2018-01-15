<template>
    <div>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <v-toolbar dark>
                        <v-menu offset-y>
                            <v-toolbar-title slot="activator">
                                <v-toolbar-side-icon></v-toolbar-side-icon>
                                Фильтр по категории
                            </v-toolbar-title>
                            <v-list>
                                <v-list-tile v-for="item in [{title:'first'},{title:'next'}]" :key="item.title"
                                             @click="">
                                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                </v-list-tile>
                            </v-list>
                        </v-menu>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>search</v-icon>
                        </v-btn>
                        <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay=false>
                            <v-btn icon slot="activator">
                                <v-icon>add</v-icon>
                            </v-btn>
                            <v-card>
                                <v-toolbar dark>
                                    <v-btn icon @click.native="dialog = false" dark>
                                        <v-icon>close</v-icon>
                                    </v-btn>
                                    <v-toolbar-title>Settings</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-toolbar-items>
                                        <v-btn dark flat @click.native="dialog = false">Save</v-btn>
                                    </v-toolbar-items>
                                </v-toolbar>
                                <v-list three-line subheader>
                                    <v-subheader>User Controls</v-subheader>
                                    <v-list-tile avatar>
                                        <v-list-tile-content>
                                            <v-list-tile-title>Content filtering</v-list-tile-title>
                                            <v-list-tile-sub-title>Set the content filtering level to restrict apps that
                                                can be downloaded
                                            </v-list-tile-sub-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile avatar>
                                        <v-list-tile-content>
                                            <v-list-tile-title>Password</v-list-tile-title>
                                            <v-list-tile-sub-title>Require password for purchase or use password to
                                                restrict purchase
                                            </v-list-tile-sub-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                                <v-divider></v-divider>
                            </v-card>
                        </v-dialog>

                    </v-toolbar>
                    <v-list two-line dark>
                        <template v-for="(item, index) in productList">
                            <v-list-tile
                                    avatar
                                    @click="toggle(index)"
                                    :key="item.objectId"
                            >
                                <v-list-tile-avatar>
                                    <img v-bind:src="item.poster">
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ item.post_title }}</v-list-tile-title>
                                    <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.headline }}
                                    </v-list-tile-sub-title>
                                    <v-list-tile-sub-title>{{ item.cat.cat_name }}</v-list-tile-sub-title>
                                </v-list-tile-content>
                                <v-list-tile-action>
                                    <v-btn icon>
                                        <v-icon>edit</v-icon>
                                    </v-btn>
                                    <v-btn icon>
                                        <v-icon>delete</v-icon>
                                    </v-btn>
                                </v-list-tile-action>
                            </v-list-tile>
                            <v-divider v-if="index + 1 < productList.length" :key="item.title"></v-divider>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>
<div>

</div>
<script>
    export default {
        name: 'product-list-page',
        data() {
            return {
                productList: [],
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false
            }
        },
        methods: {
            getProducts() {
                Backendless.Data.of("Products").find()
                    .then((result) => {
                        this.productList = result;
                    })
            }
        },
        created() {
            this.getProducts();
        },
    }
</script>

<style scoped>

</style>