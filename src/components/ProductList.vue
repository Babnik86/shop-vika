<template>
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
</template>

<script>
    import ProductCard from './ProductCard';

    export default {
        name: "product-list",
        props:['product-list'],
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
            }
        },
        created() {
            console.log()
        },
        components: { ProductCard }
    }
</script>

<style scoped>

</style>