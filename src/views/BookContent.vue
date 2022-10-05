<template>
  <Header title="From OJT Project4" />
  <Navigation />
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" class="book-title">No.</th>
          <th scope="col" class="book-title">Book Name</th>
          <th scope="col" class="book-title">Price</th>
          <th scope="col" class="book-title">Author</th>
          <th scope="col" class="book-title">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in books" :key="index">
          <th scope="row">{{ book.id }}</th>
          <td>
            <a
              href="#"
              @click="editBook(book)"
              data-bs-toggle="modal"
              :data-bs-target="'#exampleModal' + book.id"
              >{{ book.name }}</a
            >
          </td>
          <td>{{ book.price }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.date }}</td>

          <!-- Modal -->
          <div
            class="modal fade"
            :id="'exampleModal' + book.id"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    {{ book.name }}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <form @submit.prevent="onSubmit">
                  <div class="modal-body">
                    <div class="edit-book">
                      <label for="name" class="col-sm-3">Book Name</label>
                      <input
                        type="text"
                        v-model="updateBook.editName"
                        class="col-sm-6"
                      /><br /><br />

                      <label for="price" class="col-sm-3">Price</label>
                      <input
                        type="number"
                        v-model="updateBook.editPrice"
                        class="col-sm-6"
                      /><br /><br />

                      <label for="author" class="col-sm-3">Author</label>
                      <input
                        type="text"
                        v-model="updateBook.editAuthor"
                        class="col-sm-6"
                      /><br /><br />

                      <label for="date" class="col-sm-3">Date</label>
                      <input
                        type="text"
                        v-model="updateBook.editDate"
                        class="col-sm-6"
                      />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      class="btn btn-success"
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
  <Footer />
</template>

<style scoped>
@import "../assets/css/views/book-content.css";
</style>

<script src="../services/views/book-content.js">
</script>
