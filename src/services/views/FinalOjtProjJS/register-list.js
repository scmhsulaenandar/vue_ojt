export default {
    data() {
        return {
            userList: []
        }
    },
    mounted() {
        if (localStorage.getItem("userList")) {
            this.userList = JSON.parse(localStorage.getItem("userList"))
            console.log(this.userList)
            this.userList.forEach(element => {
                console.log(element)
            });
        }
    }
}
