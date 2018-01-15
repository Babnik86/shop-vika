<template>
    <v-container>
        <v-layout
                value="true"
                v-for="(item, i) in catList"
                :key="i"
                @click="goToCategory(item.slug)"
        >
            <v-flex>
                <v-btn block flat> {{item.cat_name}}  <v-icon>keyboard_arrow_right</v-icon></v-btn>
            </v-flex>
        </v-layout>
    </v-container>
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