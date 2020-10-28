<template>
    <div id="headerDiv">

        <b-navbar toggleable="lg" type="dark" variant="info">


            <b-navbar-brand to="/">

                <a class="navbar-brand" href="#">
                    <img :src="logoFalah"  alt=""/>
                </a>

            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>

                    <b-nav-item-dropdown text="Blog" right>
<!--                        <router-link to="/blog">Social</router-link>-->
                        <b-dropdown-item to="/blog/1">Social </b-dropdown-item>
                        <b-dropdown-item to="/blog/2">Technical</b-dropdown-item>
                        <b-dropdown-item to="/blog/3">Food</b-dropdown-item>
                        <b-dropdown-item to="/blog/4">Life in Chemnitz</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item  to="/about-us" >About Us</b-nav-item>
                    <b-nav-item  to="/meet-us" >Meet the Team</b-nav-item>
<!--                    <b-nav-item to="/event" >Events</b-nav-item>-->
<!--                    <b-nav-item to="/workshop" >Workshops</b-nav-item>-->
<!--                    <b-nav-item to="/project" >Projects</b-nav-item>-->
                    <b-nav-item to="/prayerReg" >Friday Prayer Register</b-nav-item>
                    <b-nav-item to="/generalReg" >CW Registration</b-nav-item>
                    <b-nav-item to="/contact" >Contact Us</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
<!--                    <b-nav-form>-->
<!--                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
<!--                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
<!--                    </b-nav-form>-->

<!--                    <b-nav-item-dropdown text="Lang" right>-->
<!--                        <b-dropdown-item href="#">EN</b-dropdown-item>-->
<!--                        <b-dropdown-item href="#">ES</b-dropdown-item>-->
<!--                        <b-dropdown-item href="#">RU</b-dropdown-item>-->
<!--                        <b-dropdown-item href="#">FA</b-dropdown-item>-->
<!--                    </b-nav-item-dropdown>-->

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                logoFalah: require ("@/assets/logo.png")
            }
        }
    }
</script>

<style>


</style>
