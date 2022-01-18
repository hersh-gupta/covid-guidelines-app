<script setup>
import Navbar from './components/Navbar.vue'
import BodyHeader from './components/BodyHeader.vue';
import BodyOptions from './components/BodyOptions.vue';
import FooterText from './components/FooterText.vue';
</script>

<template>
<body class="flex flex-col h-screen">
  <Navbar></Navbar>
  <BodyHeader></BodyHeader>
  <BodyOptions></BodyOptions>
  <FooterText></FooterText>
</body>
</template>
