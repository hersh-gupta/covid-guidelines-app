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
            <button @click="calculateDate(inputDate)" class="btn-calc">Calculate</button>
        </div>
        <div v-show="showCalc" class="w-full items-center sm:w-1/2 md:w-1/2 py-2 sm:p-2">
            <p class="font-bold">
                <b>{{ calcpre }}</b>
            </p>
            <p class="text-brightred-50 text-xl font-bold block bg-zinc-100 p-2 my-2 rounded-md text-center">
                {{ outputDate }}
                </p>
            <p class="md:text-xs">{{ calcpost }}</p>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: "BodyCalculations",
    props: ['picker', 'calcpre', 'calcpost', 'daysadded'],
    data() {
        return {
            showCalc: false,
            outputDate: ''
        }
    },
    methods: {
        calculateDate(inputDate) {
            if (inputDate) {
                this.showCalc = true;
                var input = new Date(this.inputDate);
                var output = new Date();
                output = input.setDate(input.getDate() + this.$props.daysadded);
                this.outputDate = moment(output).format('MMMM Do YYYY');
            }
        }
    },
    updated() {
        if(this.outputDate){
            window.scrollTo(0,document.body.scrollHeight);
        }
    }
}
</script>