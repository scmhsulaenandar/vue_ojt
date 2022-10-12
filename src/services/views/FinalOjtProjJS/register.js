import Birthday from "../../../views/FinalOjtProjVue/Birthday.vue"
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs } from '@vuelidate/validators'

export function validName(name) {
    let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
    if (validNamePattern.test(name)) {
        return true;
    }
    return false;
}
export default {
    components: {
        Birthday,
    },

    setup() {
        return { v$: useVuelidate() }
    },

    data() {
        return {
            userList: [],
            date: '',
            form: {
                userID: 0,
                userName: '',
                gender: [],
                email: '',
                address: '',
                date: '',
                age: '',
                userRole: ''
            },
            isSubmitted: false
        }
    },

    validations() {
        return {
            form: {
                userName: {
                    required, name_validation: {
                        $validator: validName,
                        $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
                    }
                },
                email: { required, email },
                gender: {
                    required
                }
            }
        }
    },
    mounted() {
        if (localStorage.getItem("userList")) {
            this.userList = JSON.parse(localStorage.getItem("userList"))
        }
        this.form.userID = this.userList.length + 1;

    },

    methods: {
        resetform() {
            this.$refs.form.reset();
        },
        onSubmit() {
            if (this.isSubmitted) {
                this.form.age = this.calculateAge();
                this.userList.push(this.form);
                localStorage.setItem('userList', JSON.stringify(this.userList));
                this.$router.push({ name: "register-list" });
            }
            this.isSubmitted = true

            console.log(this.form);

        },
        back() {
            this.isSubmitted = false
        },
        calculateAge() {
            let selectDate = this.form.date;
            let currentDate = new Date();
            let birthDate = new Date(selectDate);
            let difference = currentDate - birthDate;
            let age = Math.floor(difference / 31557600000);
            return age;
        }
    }
}
