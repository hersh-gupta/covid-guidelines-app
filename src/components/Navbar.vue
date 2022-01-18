<template>
    <nav class="flex items-center justify-between flex-wrap bg-neutral-200 py-4 sm:py5 md:py-6 px-2 sm:px-6 md:px-20">
        <div class="flex items-center flex-shrink text-brightred-50 mr-6">
            <!--<img title="logo" alt="Health Logo" class="object-scale-down h-5 sm:h-8 md:h-11" src="logo.svg"/>-->
            <h1 class="text-brightred-50 text-base sm:text-xl md:text-3xl font-bold">Health|Department</h1>
        </div>

        <div class="flex items-center w-auto">
            <div>
                <a @click="showModal(item)" class="nav-lang" v-for="item in languages" :key="item.id" :title="item.lang">{{ item.text }}</a>
            </div>
        </div>
    </nav>
    <NavbarLanguageModal 
        v-show="isModalVisible" 
        :lang='selectedLang'
        @close="closeModal"/>
</template>

<script>
import NavbarLanguageModal from "./NavbarLanguageModal.vue"
export default {
    name: "navbar",
    components: {
        NavbarLanguageModal
    },
    data() {
        return {
            isModalVisible: false,
            selectedLang: '',
            languages: [
                {
                    id: 1,
                    lang: 'Amharic',
                    text: 'አማርኛ'
                },
                {
                    id: 2,
                    lang: 'Chinese (Simplified)',
                    text: '中文'
                },
                {
                    id: 3,
                    lang: 'French',
                    text: 'Français'
                },
                {
                    id: 4,
                    lang: 'Korean',
                    text: '한국어'
                },
                {
                    id: 5,
                    lang: 'Spanish',
                    text: 'Español'
                },
                {
                    id: 6,
                    lang: 'Vietnamese',
                    text: 'Tiếng Việt'
                }
            ]
        }
    },
    methods: {
        showModal(item) {
            this.isModalVisible = true;
            this.selectedLang = item.lang;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
};
</script>