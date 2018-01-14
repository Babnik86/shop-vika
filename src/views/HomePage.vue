<template>
    <div>
        <input type="text" v-model="search">
        <v-btn @click="goSearch"></v-btn>
        <product-list :product-list="productList"></product-list>
    </div>
</template>

<script>
    import ProductList from './../components/ProductList'

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
        components: { ProductList }
    }
</script>

<style scoped>

</style>