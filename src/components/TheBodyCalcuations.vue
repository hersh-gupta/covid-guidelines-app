<template>
    <div class="flex flex-col sm:flex-row md:flex-row pb-4">
        <div class="w-full sm:w-1/2 md:w-1/2 py-2 sm:p-2">
            <p class="w-full text-gray-500 font-bold" v-html="picker"></p>
            <input
                type="date"
                v-model="inputDate"
                class="form-input border border-gray-300 text-navy-500 text-base sm:text-sm rounded-lg focus:ring-blue-500 focus:border-navy-500 block w-full p-2.5 my-2"
                placeholder="Select date"
            />
            <button @click="calculateDate(inputDate)" class="btn-calc">{{ $t('buttons.calculate') }}</button>
        </div>
        <transition
            mode="out-in"
            enter-active-class="transition-opacity duration-300 ease-in-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300 ease-out"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
            v-on:after-enter="afterEnter"
        >
            <div :key="outputDate" v-show="showCalc" class="w-full items-center sm:w-1/2 md:w-1/2 py-2 sm:p-2">
                <p class="font-bold"><b>{{ calcpre }}</b></p>
                <p class="text-brightred-50 text-xl font-bold block bg-zinc-100 p-2 my-2 rounded-md text-center">{{ outputDate }}</p>
                <p class="md:text-xs">{{ calcpost }}</p>
            </div>
        </transition>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: "TheBodyCalculations",
    props: ['picker', 'calcpre', 'calcpost', 'daysadded'],
    data() {
        return {
            showCalc: false,
            outputDate: ''
        }
    },
    methods: {
        calculateDate(inputDate) {
                this.showCalc = true;
                var input = new Date(inputDate);
                var output = new Date();
                output = input.setDate(input.getDate() + this.$props.daysadded);
                this.outputDate = moment(output).format('MMMM Do, YYYY');
        },
        afterEnter(){
            window.scrollTo(0,document.body.scrollHeight); 
        }
    },
    updated() {

    }
}
</script>