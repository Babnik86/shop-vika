<template>
    <div>
        <v-alert color="error" icon="warning" :dismissible="true" v-model="err.status">
            {{err.text}}
        </v-alert>
        <v-form>
            <v-text-field
                    label="Login"
                    v-model="login"
                    type="email"
                    required
            ></v-text-field>
            <v-text-field
                    label="password"
                    v-model="password"
                    type="password"
                    required
            ></v-text-field>
            <v-btn
                    @click="loginUser"
            >
                LogIn
            </v-btn>
        </v-form>
    </div>
</template>

<script>
    export default {
        name: 'login-page',
        data() {
            return {
                productList: [],
                login: 'babiyoleg@gmail.com ',
                password: 'Babiy1986',
                err: {
                    text: '',
                    status: false
                }
            }
        },
        methods: {
            loginUser() {
                if (this.login && this.password) {
                    Backendless.UserService.login(this.login, this.password, true)
                        .then((userLoggedIn) => {
                            this.$router.push({name:'admin-products-list'})
                        })
                        .catch((gotError) => {
                            this.err.status = true;
                            this.err.text = gotError.message
                        })
                }

            }
        },
        created() {
        }
    }
</script>

<style scoped>

</style>