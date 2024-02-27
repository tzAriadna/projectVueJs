<template>
  <div class="wrap_page">
    <p>/ Настройки</p>
  </div>
</template>

<script>
export default {
  name: 'SettingWidget',
  props: {
 
  }
}
</script>

<style scoped lang="scss">
@use "../assets/styles.scss" as m;
.wrap_page {
  padding: 10px 35px;
  p {
    @include m.font_styles(18px)
  }
}
</style>

