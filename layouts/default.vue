<script setup></script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="p-8 flex-grow">
      <slot></slot>
    </main>
    <AppFooter />
  </div>
</template>
