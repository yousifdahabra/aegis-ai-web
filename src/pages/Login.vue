<template>
    <div
        class="flex flex-direction-row flex-wrap align-content-center justify-content-space-around align-items-center main-login">
        <div class="login-form">
            <div class="flex flex-direction-column form-header">
                <h1 class="main-title">Welcome Back!</h1>
                <p class="sub-title">Enter your credentials to log in to your account</p>
            </div>
            <form class="flex flex-direction-column main-form">

                <div class="flex flex-direction-column">
                    <LabelInput label="Email" placeholder="Enter Your Email" type="email" v-model="email" />
                    <LabelInput label="Password" placeholder="Enter Your Password" type="password" v-model="password" />
                    <div class="flex flex-direction-row flex-wrap align-content-center justify-content-flex-start align-items-center form-check">
                        <input type="checkbox" v-model="rememberMe" >
                        <label for="Remember me" >Remember me</label>
                    </div>
                </div>

                <button class="main-btn">Login</button>

                <p>
                    Don't have an account? <a href="">Sign Up</a> 
                </p>
            </form>
        </div>
        <div class="login-image">
            <img src="https://cdn.mos.cms.futurecdn.net/SyDThccFHHMeSP2gbK8uHG-1024-80.jpg.webp" alt="">
        </div>
    </div>
    

                

</template>

<script>
import LabelInput from '@/components/common/Label_Input.vue'

export default {
    components: {
        LabelInput
    },
    data() {
        return {
            email: '',
            password: '',
            rememberMe: '',
        };
    },

}
</script>

<style></style>