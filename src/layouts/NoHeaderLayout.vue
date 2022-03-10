<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header > -->
      <q-footer elevated class="footer" :class="`no-shadow`">
        <q-toolbar class="bottomNavContainer" :class="`no-shadow`">
          <!-- <q-toolbar-title>Test</q-toolbar-title> -->
          <q-btn to="/" label="Home" flat  />
          <q-btn class="bottomNavMainItem" to="/CheckIn"  icon="cloud_upload"  color="primary" round size="xl" />
          <q-btn to="/" label="Home" flat  />

        </q-toolbar>
      </q-footer>


    <q-page-container >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>



.footer{
    border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  box-shadow: none !important;
}
.bottomNavContainer{
    box-shadow: none !important;

    /* box-shadow: 0px 10px 5px #888, 0px -10px 5px #888; */

  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  box-sizing: border-box;
  /* border: 1px solid; */
  /* border-top-left-radius: 25px;
  border-top-right-radius: 25px; */

}


.bottomNavMainItem{

    bottom: 3vh;
    position: absolute;
    /* background-color: white; */
    z-index: 999;
        text-decoration:none;

}
</style>
<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NoHeaderLayout",

  components: {
    // EssentialLink,
  },

  setup() {
    // const leftDrawerOpen = ref(false);

    return {
      // essentialLinks: linksList,
      // leftDrawerOpen,
      // toggleLeftDrawer() {
      //   leftDrawerOpen.value = !leftDrawerOpen.value;
      // },
    };
  },
});
</script>
