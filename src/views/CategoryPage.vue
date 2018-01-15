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
    import ProductCard from './../components/ProductCard'

    export default {
        name: 'category-page',
        data(){
            return {
                productList: []
            }
        },
        created() {
            let queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause( `cat.slug = '${this.$route.params.catSlug}'` );
            Backendless.Data.of( "Products" ).find( queryBuilder )
                .then( ( result ) => {
                    this.productList = result;
                })
        },
        components: { ProductCard }
    }
</script>

<style scoped>

</style>