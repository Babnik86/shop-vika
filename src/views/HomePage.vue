<template>
    <div>
        <v-text-field label="Поиск" v-model="search" required></v-text-field>
        <v-btn @click="goSearch"><v-icon> search </v-icon></v-btn>
        <div v-if="productList[0]">
            <h1>{{productList[0].cat.cat_name}}</h1>
            <v-container
                    fluid
                    style="min-height: 0;"
                    grid-list-lg>
                <v-layout row wrap>
                    <product-card v-for="product in productList" :product="product" :key="product.objectId"></product-card>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>

<script>
    import ProductCard from './../components/ProductCard'

    export default {
        name: 'home-page',
        data() {
            return {
                productList: [],
                search: ''
            }
        },
        methods: {
            goSearch() {
                let queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(`post_title LIKE '%${this.search}%'`);

                Backendless.Data.of("Products").find(queryBuilder)
                    .then((result) => {
                        this.productList = result;
                    })
            }
        },
        created() {
            Backendless.Data.of("Products").find()
                .then((result) => {
                    this.productList = result;
                })

        },
        components: { ProductCard }
    }
</script>

<style scoped>

</style>