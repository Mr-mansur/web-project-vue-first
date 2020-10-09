<template>
  <div>
    <Navbarvue></Navbarvue>
    <router-view/>
    <footer>
      <!-- <Footervue></Footervue> -->
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  components:{
    Navbarvue:Navbar,
    Footervue:Footer
  }
}
</script>

<style>

</style>
