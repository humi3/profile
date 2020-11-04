<template>
  <div class="next">
    <button v-if="nextLabel" @click="changePage(nextLabel)">
      {{ nextLabel }}
    </button>
    <button v-if="prevLabel" @click="changePage(prevLabel)">
      {{ prevLabel }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "vue";
import { useRouter } from "vue-router";

type Props = {
  next: string;
  prev: string;
};

export default defineComponent({
  name: "pagination",
  props: {
    next: {
      type: String,
    },
    prev: {
      type: String,
    },
  },
  setup(props: Props) {
    const router = useRouter();
    const nextLabel = ref<string>(props.next);
    const prevLabel = ref<string>(props.prev);

    const changePage = (pagePath: string) => {
      router.push(pagePath);
    };

    watch(
      () => props.next,
      (newVal) => {
        nextLabel.value = newVal;
      }
    );

    watch(
      () => props.prev,
      (newVal) => {
        nextLabel.value = newVal;
      }
    );

    return {
      changePage,
      nextLabel,
      prevLabel,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>