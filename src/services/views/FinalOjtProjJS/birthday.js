export default {
    props: {
        isSubmitted: false
    },

    data() {
        return {
            date: '',
            minYear: '',
            maxYear: ''
        }
    },

    computed: {
        calculateAge() {
            let selectDate = this.date;
            let currentDate = new Date();
            let birthDate = new Date(selectDate);
            let difference = currentDate - birthDate;
            let age = Math.floor(difference / 31557600000);
            let day1 = currentDate.getDate();
            let month1 = currentDate.getMonth();
            month1++;
            let minYear1 = currentDate.getFullYear() - 1;
            let maxYear2 = currentDate.getFullYear() - 100;
            let current = minYear1 + '-' + month1 + '-' + day1;
            this.maxYear = current;
            let current1 = maxYear2 + '-' + month1 + '-' + day1;;
            this.minYear = current1;
            return age;
        }
    }
}
