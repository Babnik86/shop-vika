<template>
    <div>
        Cart
        <pre>{{productList}}</pre>
    </div>
</template>

<script>
    export default {
        name: 'admin-page',
        data(){
            return {
                productList: [],
            }
        },
        methods: {
        },
        created() {
            let queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause( `user.objectId = '0C957E39-43A1-9243-FF8F-AFDD531AE200'` );

            Backendless.Data.of( "Cart" ).find( queryBuilder )
                .then( ( cart ) => {
                    this.productList = cart[0].products
                    console.log(this.productList)
                })

        }
    }
</script>

<style scoped>

</style>