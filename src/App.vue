<script setup>
import TheNavbar from './components/TheNavbar.vue'
import TheBodyHeader from './components/TheBodyHeader.vue';
import TheBodyOptions from './components/TheBodyOptions.vue';
import TheFooterText from './components/TheFooterText.vue';
</script>

<template>
<body class="flex flex-col h-screen">
  <TheNavbar></TheNavbar>
  <TheBodyHeader></TheBodyHeader>
  <TheBodyOptions></TheBodyOptions>
  <TheFooterText></TheFooterText>
</body>
</template>
