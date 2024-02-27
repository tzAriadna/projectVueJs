<template>
    <div class="main_wrapper">
        <header class="header">
            <img class="header__logo" src="@/assets/img/logo.png" alt="логотип">
            <div class="header__menu">
                <nav class="menu__link">
                    <router-link class="link" :to="{ name: 'Monitoring'}">Мониторинг</router-link>
                    <router-link class="link" :to="{ name: 'AddInfo'}">Дополнительная информация</router-link>
                    <router-link class="link" :to="{ name: 'ConnectedDevices'}" >Подключенные устройства</router-link>
                    <router-link class="link" :to="{ name: 'SettingWidget'}" >Настройки</router-link>
                    <router-link class="link" :to="{ name: 'Authorization'}" >Авторизация</router-link>
                </nav>
                <div class="menu_icons">
                    <img class="icon" src="@/assets/img/CPU.png" alt="cpu">
                    <img class="icon" src="@/assets/img/Subtract.png" alt="wifi">
                    <img class="icon" src="@/assets/img/Battery.png" alt="battery">
                </div>
            </div>
            <MenuLogo/>
        </header>

        <main class="content">
            <router-view/>
        </main>

        <footer class="footer"> 
            <p>&copy; НПФ "Гранч", {{ new Date().getFullYear() }}</p>
            <p>прошивка 3.10.254</p>
        </footer>
    </div>
</template>

<script>
import MenuLogo from './MenuLogo.vue'

export default {
    name: 'MainWrapper',
    components: {
        MenuLogo
    },
    data() {
        return {
            title: 'main wrapper',
            data: '',
        }
    },
    
    mounted() {},
    computed: {},
    methods: {},
    watch: {},
}
</script>

<style scoped lang="scss">
@use "../assets/styles.scss" as m;
    .main_wrapper {
        width: 100%;
        min-height: 100vh;
        @include m.background;
    } 

    .header {
        @include m.display_flex(row, center);
        height: 150px;
        .header__logo {
            @include m.params_header_logo(346px, 117px, 0px, 35px);
        }
        .header__menu {
            @include m.display_flex(row, center);
            justify-content: space-between;
            width: 100%;
            margin-left: 43px;
            background: rgba(26, 26, 26, 0.5);
            border-radius: 5px;
            padding: 3px 0 3px 18px;
            nav a{
                @include m.font_styles(18px);
                letter-spacing: 1px;
                margin-left: 25px;
                color: #fff;
            } 
            nav a:not(:last-child)::after{ 
                content: "";
                background: #fff;
                margin-left: 25px;
                border: 1px solid rgba(161, 161, 161, 1);
            }
            nav a.router-link-exact-active {
                @include m.activeLink;
            }
        }
    }


    .content {
        border: 1px solid rgba(85, 85, 85, 1);
        background: rgba(55,55,55,0.5);        
        backdrop-filter: blur(5px);
        min-height: 83vh;
    }

    .footer {
        height: 35px;
        padding: 0 15px;
        @include m.display_flex(row, center);
        @include m.font_styles(12px);
        justify-content: space-between;
    }

</style>