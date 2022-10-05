export default {
    data() {
        return {
            books: []
        }
    },
    mounted() {
        this.books = [
            { id: '1', name: 'Smooth of Love', price: '2000', author: 'Su Myat Mon Mon', date: '1/8/2019' },
            { id: '2', name: 'ME', price: '1500', author: 'Yar Za Koe', date: '' },
            { id: '3', name: 'Nga Duu', price: '2000', author: 'Su Myat Mon Mon', date: '1/8/2019' },
            { id: '4', name: 'Mystery of Burma', price: '1500', author: 'Yar Za Koe', date: '' }
        ]
    }
}
