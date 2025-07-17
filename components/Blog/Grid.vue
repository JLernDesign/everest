<script setup></script>

<template>
  <div
    class="thumbs-grid grid w-full grid-cols-1 border-t border-grayline s:grid-cols-3 s:divide-x-1 max-s:divide-y-1 [&_.thumb:first-child]:s:!border-r-transparent [&_.thumb:nth-child(3n)]:s:!border-r-transparent [&_.thumb]:!border-grayline [&_.thumb]:s:!border-b-1 [&_.thumb]:s:border-r-1"
  >
    <slot />
  </div>
</template>
