<script setup></script>

<template>
  <div class="bg-skyblue">
    <!-- basic hero -->
    <Section :hero="true" class="pb-section-bot-mob s:pb-section-bot-lg">
      <SectionHeader
        class="pt-[4rem]"
        align="center"
        :hero="true"
        :data="{ headline: 'Leadership' }"
      />
    </Section>

    <!-- team -->
    <AboutTeam />

    <!-- <FlexibleBlocks :data="page.flexibleContent.modules" />
    <FooterLockup :data="page.footerCallout" /> -->
  </div>
</template>
