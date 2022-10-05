import SecondContent from "../../components/SecondContent.vue"
export default {
    components: {
        SecondContent,
    },
    data() {
        return {
            movieTitle: 'Welcome from Movies List...',
            movies: []
        }
    },
    mounted() {
        this.movies = [
            { id: '1', name: 'Mone Swal', description: 'Drama Movie' },
            { id: '2', name: 'ME', description: 'Drama Movie' },
            { id: '3', name: 'Nga Duu', description: 'Drama Movie' },
            { id: '4', name: 'Mystery of Burma', description: 'Drama Movie' },
            { id: '4', name: 'Phoe Shate', description: 'Drama Movie' },
            { id: '4', name: 'Mudras calling', description: 'Drama Movie' },
            { id: '4', name: 'Deception', description: 'Drama Movie' }
        ]
    }
}
