<template>
    <v-list>
        <v-list-tile
                value="true"
                v-for="(item, i) in catList"
                :key="i"
                @click="goToCategory(item.slug)"
        >
            <v-list-tile-content>
                <v-list-tile-title v-text="item.cat_name"></v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>
    export default {
        name: "cat-list",
        data() {
            return {
                catList: []
            }
        },
        methods: {
            goToCategory(slug) {
                this.$router.push({name: 'category',
                    params: {
                    catSlug: slug
                }})
            }
        },
        created() {
            Backendless.Data.of("Categories").find()
                .then((result) => {
                    this.catList = result;
                })
        }
    }
</script>

<style scoped>

</style>