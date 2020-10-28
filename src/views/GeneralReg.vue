<template>

    <div>
        <HeaderComponent></HeaderComponent>
        <H5>Welcome to charity week page registration!!!</H5>
        <b-container>
        <br>
        <br>
        <b-form>

            <b-input
                    placeholder="First name"
                    v-model = "form.firstName"
            ></b-input>
            <br>

            <b-input
                    placeholder="last name"
                    v-model = "form.lastName"
            ></b-input>
            <br>

            <b-input
                    placeholder="Email"
                    v-model = "form.email"
            ></b-input>
            <br>



            <b-button type="button"  @click="registration()" variant="primary">Registration</b-button>
        </b-form>
        </b-container>

    </div>
</template>

<script>
    import HeaderComponent from "../components/HeaderComponent";
    export default {
        name: "Project",
        components: {HeaderComponent},

        data() {
            return {
                form: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    role: '',
                    event: '',
                }
            }
        },

        methods: {
            async registration (){
                let result = await this.axios.post("/api/generalRegistration/",
                    {
                        ...this.form
                    }
                );

                alert(result.data);
            }
        }
    }

</script>

<style scoped>

</style>
