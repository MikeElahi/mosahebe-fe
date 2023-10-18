<template>
    <UContainer>
    <div class="flex flex-row justify-between items-center h-20">
        <div class="flex flex-row items-center">
            <ULink to="/"><img src="~/assets/logo.png" class="h-10 w-10 rounded-sm mr-1" /></ULink>
            <ULink to="/"><h1 class="wordmark">MOSAHEBE</h1></ULink>
        </div>
        <div class="flex flex-row items-center md:mr-9">
            <ULink to="/about" class="mr-2">About</ULink>
            <UButton to="https://github.com/MikeElahi" target="_blank" variant="solid" color="gray" size="sm">Find Me!</UButton>
        </div>
    </div>
    </UContainer>
</template>
<script setup>
const toast = useToast()
</script>
<style>
    .wordmark {
        font-family: 'Rubik Mono One', sans-serif;
    }
</style>