<script setup></script>

<template>
  <div
    class="thumbs-grid flex w-full flex-wrap border-t border-grayline s:flex-row s:divide-x-1 max-s:divide-y-1 [&_.thumb:first-child]:s:!border-r-transparent [&_.thumb:nth-child(3n)]:s:!border-r-transparent [&_.thumb]:!border-grayline [&_.thumb]:s:!border-b-1 [&_.thumb]:s:border-r-1"
  >
    <slot />
  </div>
</template>
