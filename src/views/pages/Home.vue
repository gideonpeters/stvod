<template>
  <div class="home">
    <div class="bg-darken"></div>
    <div class="main-body">
      <div class="mr-24 flex flex-row-reverse">
        <div
          class="text-white px-10 py-6 uppercase"
          v-for="(route, ix) in routes"
          :key="ix"
        >{{route.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    routes: [
      {
        title: "Sign up",
        name: "main.sign-up"
      },
      {
        title: "Login",
        name: "main.login"
      },
      {
        title: "TV Shows",
        name: "main.tv-shows"
      },
      {
        title: "Movies",
        name: "main.movies"
      },
      {
        title: "Home",
        name: "main.home"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.home {
  background-image: url("./../../assets/images/bg.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: 1;
  position: relative;

  .bg-darken {
    background: #222222;
    opacity: 0.4;
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 2;
  }

  .main-body {
    position: relative;
    z-index: 10;
  }
}
</style>