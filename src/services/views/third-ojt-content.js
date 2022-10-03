import Header from "../../components/Header.vue"
import ThirdContent from "../../components/ThirdContent.vue"
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
        ThirdContent,
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
}
