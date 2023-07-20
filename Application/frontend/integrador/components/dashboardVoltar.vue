<template>
    <body>
        <div id="container">
            <NuxtLink to="/dashboard">
                <img src="../static/dashboard-return-icon.png" alt="">
            </NuxtLink>
        </div>
    </body>
</template>

<script>
export default {
    name: 'dashboardVoltar'
}
</script>

<style scoped>
    #container {
        position: fixed;
        left: 22.875rem;
        top: 64px;
    }
</style>  