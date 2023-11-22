<template>
    <header>Header</header>
    <main>
        <slot />
    </main>
    <Footer />
</template>
<script setup>
import Footer from './Footer.vue';
</script>