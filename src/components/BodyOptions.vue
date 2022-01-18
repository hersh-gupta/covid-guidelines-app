<template>
    <div class="flex w-full h-full px-2 sm:px-6 md:px-20 mt-5 items-center">
        <transition
            mode="out-in"
            enter-active-class="transition-all translate-x-6 duration-100"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-all -translate-x-6 duration-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div v-if="!selectedOpt" key="unselected" class="flex items-start w-full flex-col space-y-4 pr-4">
                <a
                    @click="selectOpt(item)"
                    class="cursor-pointer text-navy-500 text-2xl font-bold block p-2 hover:text-brightred-50 transition ease-in-out duration-300"
                    v-for="item in options"
                    :key="item.id"
                    :title="item.title"
                >{{ item.title }}</a>
            </div>

            <div v-else key="selected" class="flex-initial md:w-full pl-4 sm:block md:block">
                <p @click="selectedOpt = ''" class="cursor-pointer w-1/4 text-brightred-50 text-base font-bold mb-4">&#129044; Back</p>
                <h2 class="text-navy-500 text-2xl font-bold mb-4">{{ selectedOpt.title }}</h2>
                <p class="text-navy-500 text-base tracking-wide mb-5" v-html="selectedOpt.detail"></p>
                <BodyCalcuations
                    ref="bodycalc"
                    :picker="selectedOpt.picker"
                    :calcpre="selectedOpt.calcpre"
                    :calcpost="selectedOpt.calcpost"
                    :daysadded="selectedOpt.daysadded"
                />
            </div>

        </transition>

    </div>
</template>

<script>
import BodyCalcuations from "./BodyCalcuations.vue"
export default {
    name: "BodyOptions",
    data() {
        return {
            selectedOpt: "",
            options: [
                {
                    id: 1,
                    title: "You have tested positive and have symptoms",
                    detail: "If you are symptomatic and have tested positive for COVID-19 then you must <b>isolate for 10 days from the date your symptoms began.</b><br><br> To stop or discontinue isolation, at least 10 days must have passed since your symptoms began and at least 24 hours have passed since your fever went away without the use of fever-reducing medications (such as Tylenol or Ibuprofen) and other symptoms have improved. <a href=\"https://www.cdc.gov/coronavirus/2019-ncov/your-health/quarantine-isolation.html\" target=\"_blank\" class=\"underline decoration-navy-500 decoration-2 font-bold\">Learn more.</a>",
                    picker: "Select the first day your symptoms began:",
                    calcpre: "If your symptoms have improved and 24 hours have elapsed without a fever without the use of medication, your isolation ENDS on:",
                    calcpost: "On this date, you may resume your usual activities but should still take precautions to reduce your risk (i.e. social distancing, frequent handwashing, and wearing a mask when social distancing isn't possible).",
                    daysadded: 11
                },
                {
                    id: 2,
                    title: "You have tested positive but have NO symptoms",
                    detail: "If you test positive for COVID-19 and do not have symptoms, stay home and <b>isolate for 10 days from the day you had your test.</b><br><br>After 10 days, you can leave your house. Continue to wear a mask around others for an additional 5 days. If you cannot mask, continue to isolate at home for the 5 additional days. <a href=\"https://www.cdc.gov/coronavirus/2019-ncov/your-health/quarantine-isolation.html\" class=\"underline decoration-navy-500 decoration-2 font-bold\">Learn more.</a>",
                    picker: "Select your most recent positive test date below:",
                    calcpre: "If you have no symptoms, your isolation ENDS on:",
                    calcpost: "On this date, you may resume your usual activities but should still take precautions to reduce your risk (i.e. social distancing, frequent handwashing, and wearing a mask when social distancing isn't possible).",
                    daysadded: 11
                },
                {
                    id: 3,
                    title: "You have been identified as a close contact AND you are fully vaccinated",
                    detail: "<b>Wear a mask around others for 14 days from your last exposure (day zero).</b> You do not have to stay home. Test on day 5, if possible. If you develop symptoms get a test and stay home. <a href=\"https://www.cdc.gov/coronavirus/2019-ncov/your-health/quarantine-isolation.html\" class=\"underline decoration-navy-500 decoration-2 font-bold\">Learn more.</a>",
                    picker: "Select the last contact with the person who tested positive below:",
                    calcpre: "If you are fully vaccinated, wear a mask around others through:",
                    calcpost: "Test on day 5, if possible",
                    daysadded: 15
                },
                {
                    id: 4,
                    title: "You have been identified as a close contact AND you are NOT fully vaccinated",
                    detail: "<b>Stay home for 14 days from your last exposure (day zero).</b> You may end quarantine after 10 days if you do not develop symptoms during quarantine, but continue to monitor symptoms for the full 14 days. <a href=\"https://www.cdc.gov/coronavirus/2019-ncov/your-health/quarantine-isolation.html\" class=\"underline decoration-navy-500 decoration-2 font-bold\">Learn more.</a>",
                    picker: "Select the last contact with the person who tested positive below:",
                    calcpre: "If you are not fully vaccinated, your isolation ENDS on:",
                    calcpost: "",
                    daysadded: 15
                }
            ]
        };
    },
    methods: {
        selectOpt(item) {
            if (window.scrollY) {
                window.scroll(0, 0);  // reset the scroll position to the top left of the document.
                }
            this.selectedOpt = item;
            this.$refs.bodycalc.showCalc = false;
            this.$refs.bodycalc.inputDate = '';
        }
    },
    updated() {},

    components: { BodyCalcuations }
}
</script>