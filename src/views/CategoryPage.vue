<template>
    <div>
        <product-list :product-list="productList"></product-list>
    </div>
</template>

<script>
    import ProductList from './../components/ProductList'

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
        components: { ProductList }
    }
</script>

<style scoped>

</style>