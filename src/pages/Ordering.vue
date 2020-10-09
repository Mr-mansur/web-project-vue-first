<template>
  <div>
    <form method="POST" class="form container">
      <div class="form-group row m-auto">
        <label for="email" class="col-md-2 m-auto">Email developer</label>
        <input v-model="email" class="form-control col-md-6 m-auto" type="email" name="email" disabled>
      </div>
      <br>
      <div class="form-group row m-auto">
        <label for="custom-select" class="col-md-2 m-auto">Sayt turini tanlang</label>
        <select class="custom-select col-md-6 m-auto">
          <option selected>Sayt turini tanlang</option>
          <option value="1">Sayt vizitka</option>
          <option value="2">Bir sahifali sayt</option>
          <option value="3">Kompaniya sayti</option>
          <option value="4">Online platforma</option>
          <option value="5">Internet do`kon</option>
          <option value="6">Shahsiy blog-sahifa</option>

        </select>
      </div>
      <br>
      <div class="form-group row m-auto">
        <label class="col-md-2 m-auto" for="textarea">Sayt haqida ma`lumotlarni kiriting</label>
        <textarea class="form-control col-md-6 m-auto" name="textarea" cols="30" rows="10" required></textarea>
      </div>
      <br>
      <div class="form-group row m-auto">
        <label for="email-1" class="col-md-2 m-auto">Buyurtmachi elektron pochta manzili</label>
        <input type="email" name="email-1" class="form-control col-md-6 m-auto" required>
      </div>
      <br>
      <div class="form-group row m-auto">
        <button type="submit" class="col-md-2 m-auto btn btn-danger">Yuborish</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email:'mansur.mustafoyev.98@mail.ru'
    }
  }
}
</script>

<style>
  form{
    margin-top: 100px;
  }
</style>
