<template>
    <div
        class="flex flex-direction-row flex-wrap align-content-center justify-content-space-around align-items-center main-login">
        <div class="login-form">
            <div class="flex flex-direction-column form-header">
                <h1 class="main-title">Welcome Back!</h1>
                <p class="sub-title">Enter your credentials to log in to your account</p>
            </div>
            <div class="flex flex-direction-column ">
                <form action="">
                    <LabelInput label="Email" placeholder="Enter Your Email" type="email" v-model="email" />
                    <LabelInput label="Password" placeholder="Enter Your Password" type="password" v-model="password" />
                </form>
            </div>
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
 
}
</script>

<style></style>