import Header from "../../components/Header.vue"
import Footer from "../../components/Footer.vue"
import useVuelidate from '@vuelidate/core'
import { required, email, url, sameAs } from '@vuelidate/validators'

export function validName(name) {
    let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
    if (validNamePattern.test(name)) {
        return true;
    }
    return false;
}
export default {
    components: {
        Header,
        Footer
    },

    setup() {
        return { v$: useVuelidate() }
    },

    data() {
        return {
            form: {
                name: '',
                email: '',
                url: '',
                phoneNo: ''
            }
        }
    },

    validations() {
        return {
            form: {
                name: {
                    required, name_validation: {
                        $validator: validName,
                        $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
                    }
                },
                email: { required, email },
                url: {
                    required, url
                },
                phoneNo: {
                    required, Number
                }
            }
        }
    },
    methods: {
        resetform() {
            this.$refs.form.reset();
        },
        onSubmit() {
            alert("Name : " + this.form.name + "\nEmail : " + this.form.email + "\nURL : " + this.form.url + "\nPhoneNumber : " + this.form.phoneNo);
            this.$refs.form.reset();
        }
    }
}
