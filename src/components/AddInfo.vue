<template>
  <div class="wrap_page">
    <p>/ Дополниельная информация</p>
  </div>
</template>

<script>
export default {
  name: 'AddInfo',
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
