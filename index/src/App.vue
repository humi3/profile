<template>
  <div class="main">
    <Top />
    <div class="dashboard">
      <Previous :prev="state.prev" />
      <router-view />
      <Next :next="state.next" />
    </div>
    <Down />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from "vue";
import { useRoute } from "vue-router";

import { Pages } from "./const/slide";

import Top from "@/components/commons/Header.vue";
import Down from "@/components/commons/Footer.vue";
import Previous from "@/components/commons/Pagination.vue";
import Next from "@/components/commons/Pagination.vue";

type PaginationStatus = {
  next: string;
  prev: string;
};

const getRouter = (path: string) => {
  const pages = new Pages().getPages();
  const pathIndex = pages.findIndex((item) => item.path === path);

  let nextPath = "";
  if (pathIndex + 1 < pages.length) {
    nextPath = pages[pathIndex + 1].name;
  }

  let prevPath = "";
  if (pathIndex != 0) {
    prevPath = pages[pathIndex - 1].name;
  }

  return reactive<PaginationStatus>({
    next: nextPath,
    prev: prevPath,
  });
};

export default defineComponent({
  name: "app",
  components: { Top, Down, Next, Previous },
  setup() {
    const route = useRoute();
    const pageData = getRouter(route.path);
    const state = reactive<PaginationStatus>({
      next: pageData.next,
      prev: pageData.prev,
    });

    watch(
      () => route.path,
      (newVal, oldVal) => {
        const newPage = getRouter(newVal);
        state.next = newPage.next;
        state.prev = newPage.prev;
      }
    );

    return {
      state,
    };
  },
});
</script>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0px;
  padding: 0px;
}

#app {
  width: 100%;
  height: 720px;

  .main {
    height: 100%;
    .top,
    .down {
      height: 12%;
    }
    .dashboard {
      height: 76%;
      width: 100%;
      display: table;
      .content,
      .previous,
      .next {
        display: table-cell;
      }
      .next,
      .previous {
        width: 10%;
        vertical-align: middle;
        text-align: center;
      }
      .content {
        width: 80%;
      }
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
