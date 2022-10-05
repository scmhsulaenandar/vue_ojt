export default {
    data() {
        return {
            books: [],
            updateBook: {
                editId: '', 
                editName: '', 
                editPrice: '', 
                editAuthor: '', 
                editDate: ''
            }
        }
    },
    mounted() {
        this.books = [
            { id: '1', name: 'Smooth of Love', price: '2000', author: 'Su Myat Mon Mon', date: '1/8/2019' },
            { id: '2', name: 'ME', price: '1500', author: 'Yar Za Koe', date: '' },
            { id: '3', name: 'Nga Duu', price: '2000', author: 'Su Myat Mon Mon', date: '1/8/2019' },
            { id: '4', name: 'Mystery of Burma', price: '1500', author: 'Yar Za Koe', date: '' }
        ]
    },
    methods: {
        editBook(editBooks) {
            this.updateBook = {
                editId: editBooks.id,
                editName: editBooks.name,
                editPrice: editBooks.price,
                editAuthor: editBooks.author,
                editDate: editBooks.date
            };
            console.log(editBooks)
        },
        onSubmit() {
            this.books.forEach(book => {
                if (book.id == this.updateBook.editId) {
                    book.id = this.updateBook.editId,
                        book.name = this.updateBook.editName,
                        book.price = this.updateBook.editPrice,
                        book.author = this.updateBook.editAuthor,
                        book.date = this.updateBook.editDate
                }
            });
        }
    }
}
