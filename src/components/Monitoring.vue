<template>
  <div class="wrap_page">
    <p>/ Мониторинг</p>
    <div class="warning">
      <img class="icon" src="@/assets/img/warning.png" alt="warning">
      <div class="warning__text">
        <span>Высокий уровень загрузки ЦПУ (92%)</span>
        <span>Отсутствует питание (фидер 1)</span>
        <button>Диагностика</button>
      </div>
    </div>
    <div class="mon_wrapper">
      <div class="top_tables">
        <div class="general_table">
          <div class="wrap_h1"><h1>Общая информация</h1></div>
          <div class="table__content">content</div>
        </div>
        <div class="power_table">
          <div class="wrap_h1"><h1>Питание</h1></div>
          <div class="table__content">info</div>
        </div>
      </div>
      <div class="lower_table">
        <div class="stateInf_table">
          <div class="wrap_h1"><h1>Состояние интерфейсов</h1></div>
          <div class="table__content">info</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
.warning {
  border: 1px solid rgba(85, 85, 85, 1);
  @include m.display_flex(row, start);
  width: 1238px;
  border-radius: 10px;
  background: rgba(17, 17, 17, .95);
  padding: 10px 0 15px;
  .icon {
    margin-left: 15px;
  }
  .warning__text {
    margin-left: 12px;
    @include m.display_flex(column, start);
    @include m.font_styles(20px);
    color: rgba(165, 79, 0, 1);
    line-height: 1.5;
  }
  button {
    margin-top: 15px;
    @include m.button_styles;
    @include m.font_styles(16px);
  }
  button:hover {
    background-color: rgb(182, 126, 36);
  }
}
.mon_wrapper {
  margin-top: 30px;
}
.top_tables, .lower_table {
  @include m.display_flex(row, center);
  width: 1238px;
}
.general_table, .power_table, .stateInf_table {
  width: 100%;
  height: 300px;
  border-radius: 15px;
  background-color: rgba(17, 17, 17, .95);
  .wrap_h1 {
    background-color: rgba(34, 34, 34, 1);
    height: 40px;
    @include m.display_flex(row, center);
    border-radius: 15px 15px 0 0;
    padding: 0px 10px;
    h1 {
      @include m.font_styles(18px);
      margin: 0;
    }
  }
  .table__content {
    padding: 10px;
  }
}
.power_table {
  margin-left: 20px;
}
.stateInf_table {
  margin: 40px 0;
}

@media screen and (max-width: 1300px) {
  .top_tables, .lower_table, .warning {
    width: 100%;
  }
}
</style>
