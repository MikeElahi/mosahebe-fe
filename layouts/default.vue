<template>
    <div>
        <div class="border-b-2 border-gray-800 mb-2">
            <Navbar />
        </div>
            <slot/>
        <UNotifications />
    </div>
</template>
<style>
    body {
        font-family: 'Roboto', sans-serif;
    }
</style>