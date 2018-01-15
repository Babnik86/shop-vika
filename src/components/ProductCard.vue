<template>
    <div class="flex xs3">
        <v-card>
            <v-card-media
                    class="white--text"
                    height="200px"
                    :src="product.poster"
            >
            </v-card-media>
            <v-card-title>
                <div>
                    <span class="headline">{{product.post_title}}</span><br>
                    <span>{{product.description}}</span>
                </div>
            </v-card-title>
            <div></div>
            <v-card-actions>
                <v-btn flat color="green">Купить</v-btn>
                <v-btn flat color="blue" @click="addTols(product.objectId)">Добавить в корзину</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueLocalStorage from 'vue-local-storage'


    export default {
        name: "product-card",
        props: ['product'],
        data() {
            return {
            }
        },
        methods: {
            goToCategory(slug) {
                this.$router.push({
                    name: 'category',
                    params: {
                        catSlug: slug
                    }
                })
            },
            addTols(id) {
                window.$localStorage.set('someNumber', 123)
            }
        },
        created() {
        }
    }
</script>

<style scoped>

</style>