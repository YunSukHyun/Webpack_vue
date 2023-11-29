<template>
  <nav>
    <div class="header">
      <div class="user-profile"></div>
      Yun's Notion
    </div>

    <ul></ul>
    <div class="actions"></div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 240px;
  height: 100%;
  background-color: $color-background;
  .header {
    padding: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    .user-profile {
      width: 20px;
      height: 20px;
      border-radius: 4px;
      margin-right: 10px;
      background-image: url("https://avatars.githubusercontent.com/u/96977881?v=4");
      background-size: cover;
    }
  }
  ul {
  }
  .actions {
  }
}
</style>
