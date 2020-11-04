<template>
  <div class="top">
    <h1>
      {{ text }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type Props = {
  text: string;
};

export default defineComponent({
  name: "top",
  props: {
    text: {
      type: String,
      default: "header",
    },
  },
});
</script>

<style lang="scss" scoped>
.top {
  display: table;
  h1 {
    margin: 0px;
    display: table-cell;
    vertical-align: middle;
  }
}
</style>