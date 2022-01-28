<template>
    <nav class="flex items-center justify-between flex-wrap shadow-lg bg-zinc-100 py-4 sm:py-5 md:py-6 px-2 sm:px-6 md:px-20">
        <div class="flex items-center flex-shrink text-brightred-50 mr-6">
            <!--<img title="logo" alt="Health Logo" class="object-scale-down h-5 sm:h-8 md:h-11" src="logo.svg"/>-->
            <h1 class="text-brightred-50 text-base sm:text-xl md:text-3xl font-bold">Health|Department</h1>
        </div>

        <div class="flex items-center w-auto">
            <div>
                <a @click="setLocale(item)" 
                :class="{'nav-lang-selected': item.locale === this.$i18n.locale, 'nav-lang': item.locale != this.$i18n.locale}"
                v-for="item in languages" 
                :key="item.id" 
                :title="item.lang">{{ item.text }}
                </a>
            </div>
        </div>
    </nav>
    <TheNavbarLanguageModal 
        v-show="isModalVisible" 
        :lang='selectedLang'
        @close="closeModal"/>
</template>

<script>
import TheNavbarLanguageModal from "./TheNavbarLanguageModal.vue"
export default {
    name: "TheNavbar",
    components: {
        TheNavbarLanguageModal
    },
    data() {
        return {
            isModalVisible: false,
            selectedLang: '',
            languages: [
                {
                    id: 1,
                    lang: 'Amharic',
                    text: 'አማርኛ',
                    locale: 'am'
                },
                {
                    id: 2,
                    lang: 'Chinese (Simplified)',
                    text: '中文',
                    locale: 'zh'
                },
                {
                    id: 3,
                    lang: 'French',
                    text: 'Français',
                    locale: 'fr'
                },
                {
                    id: 4,
                    lang: 'Korean',
                    text: '한국어',
                    locale: 'ko'
                },
                {
                    id: 5,
                    lang: 'Spanish',
                    text: 'Español',
                    locale: 'es'
                },
                {
                    id: 6,
                    lang: 'Vietnamese',
                    text: 'Tiếng Việt',
                    locale: 'vi'
                },
                {
                    id: 7,
                    lang: 'English',
                    text: 'English',
                    locale: 'en'
                }
            ]
        }
    },
    methods: {
        setLocale(item) {
            if(this.$i18n.availableLocales.includes(item.locale)){
                this.$i18n.locale = item.locale;
            } else {
                this.isModalVisible = true;
                this.selectedLang = item.lang
            }
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
};
</script>