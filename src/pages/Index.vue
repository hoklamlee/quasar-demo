
<template >
  <!-- <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page> -->
  <q-page class="page" >
<div class="flexbox">
  <div class="section_one">one</div>
  <div class="section_two">
      <div class="q-pa-md ">
      <div class="row justify-evenly q-col-gutter-xl">
        <div class="col-6 "><ImageCard title="Test" /></div>
        <div class="col-6 "><ImageCard title="Test" /></div>
        <div class="col-6 "><ImageCard title="Test" /></div>
        <div class="col-6 "><ImageCard title="Test" /></div>
      </div>
    </div>
  </div>

</div>




  </q-page>
</template>

<style scoped>

.flexbox{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.section_one{
  height: 30vh;
  background-color: aqua;
}

.section_two{
  height: 70vh;
  background-color: purple;
}
</style>


<script>
import { defineComponent } from "vue";
import ImageCard from "components/ImageCard.vue";

export default defineComponent({
  name: "PageIndex",
  components:{ImageCard}
});
</script>
