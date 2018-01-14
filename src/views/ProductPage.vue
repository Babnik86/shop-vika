<template>
    <div>
        <pre>{{product}}</pre>
    </div>
</template>

<script>
    export default {
        name: 'product-page',
        data(){
            return {
                product: []
            }
        },
        created() {
            let queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause( `slug = '${this.$route.params.productSlug}'` );

            Backendless.Data.of( "Products" ).find( queryBuilder )
                .then( ( result ) => {
                    this.product = result;
                })

        }
    }
</script>

<style scoped>

</style>