<template>
    <div class="flex justify-start w-full px-2 sm:px-6 md:px-20 mt-5 mb-auto">
        <transition
            mode="out-in"
            enter-active-class="transition-all duration-100 ease-in-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-all duration-100 ease-in-out"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="!isSelected"
                key="unselected"
                class="flex flex-col w-full m-auto space-y-4 sm:space-y-6 md:space-y-8 sm:w-9/12 md:w-8/12 lg:5/12 pb-2 px-2 sm:px-0 md:px-0"
            >
                <a
                    @click="selectOpt(key)"
                    class="cursor-pointer text-navy-500 text-2xl sm:text-3xl md:text-3xl font-bold block px-2 py-2 md:hover:text-brightred-50 md:hover:shadow-lg transition ease-in-out duration-300 bg-zinc-100 rounded-md shadow-md border-b-4 border-navy-500"
                    v-for="{ title, key } in getOptions"
                    :key="key"
                    :title="title"
                >{{ title }}</a>
            </div>

            <div v-else key="selected" class="flex-initial md:w-full px-2 sm:block md:block">
                <p
                    @click="isSelected=false"
                    class="cursor-pointer w-1/4 text-brightred-50 text-base font-bold mb-4"
                >&#8592; Back</p>
                <h2
                    class="text-navy-500 text-2xl font-bold mb-4"
                >{{ this.getOptions[selectedOpt].title }}</h2>
                <p
                    class="text-navy-500 text-base tracking-wide mb-5"
                    v-html="this.getOptions[selectedOpt].detail"
                ></p>
                <TheBodyCalcuations
                    ref="bodycalc"
                    :picker="this.getOptions[selectedOpt].picker"
                    :calcpre="this.getOptions[selectedOpt].calcpre"
                    :calcpost="this.getOptions[selectedOpt].calcpost"
                    :daysadded="this.getOptions[selectedOpt].daysadded"
                />
            </div>
        </transition>
    </div>
</template>

<script>
import TheBodyCalcuations from "./TheBodyCalcuations.vue"
export default {

    name: "TheBodyOptions",
    data() {

        return {
            selectedOpt: "",
            isSelected: false
        };
    },
    computed: {
        getOptions() {
            return [
                { key: 0, title: this.$t('opts[0].title'), detail: this.$t('opts[0].detail'), picker: this.$t('opts[0].picker'), calcpre: this.$t('opts[0].calcpre'), calcpost: this.$t('opts[0].calcpost'), daysadded: 11 },
                { key: 1, title: this.$t('opts[1].title'), detail: this.$t('opts[1].detail'), picker: this.$t('opts[1].picker'), calcpre: this.$t('opts[1].calcpre'), calcpost: this.$t('opts[1].calcpost'), daysadded: 11 },
                { key: 2, title: this.$t('opts[2].title'), detail: this.$t('opts[2].detail'), picker: this.$t('opts[2].picker'), calcpre: this.$t('opts[2].calcpre'), calcpost: this.$t('opts[2].calcpost'), daysadded: 15 },
                { key: 3, title: this.$t('opts[3].title'), detail: this.$t('opts[3].detail'), picker: this.$t('opts[3].picker'), calcpre: this.$t('opts[3].calcpre'), calcpost: this.$t('opts[3].calcpost'), daysadded: 15 }
            ]
        }

    },
    methods: {
        selectOpt(key) {
            this.isSelected = !this.isSelected;
            this.selectedOpt = key; 
            /*             this.$refs.bodycalc.showCalc = false;
                        this.$refs.bodycalc.inputDate = ''; */
        }
    },

    components: { TheBodyCalcuations }
}
</script>