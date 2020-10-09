<template>
  <div>
    <div id="carouselIndicator" class="carousel slide row" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselIndicator" data-slide-to="0" class="active"></li>
    <li data-target="#carouselIndicator" data-slide-to="1"></li>
    <li data-target="#carouselIndicator" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="5000">
      <img v-bind:src="img1" class="d-block w-100">
    </div>
    <div class="carousel-item" data-interval="5000">
      <img v-bind:src="img2" class="d-block w-100">
    </div>
    <div class="carousel-item" data-interval="5000">
      <img v-bind:src="img3" class="d-block w-100">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselIndicator" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselIndicator" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<br>
<div class="row card-group container m-auto">
  <div class="card col-md-5 m-auto">
    <img v-bind:src="avatar" class="card-image m-auto">
    <div class="card-header text-center"><b>Mustafoyev Mansur(Fullstack developer)</b></div>
    <p class="card-content m-auto text-center">
      My name is Mansur Mustafoyev Ravshan o`g`li.I was born on July 30,1998.I am 24 years old now.I leave in Qaroli village,Jondor district,Bukhara region.
    </p>
    <div class="m-auto">
      <a class="row m-auto" v-bind:href="link1">My twitter account</a>
      <a class="row m-auto" v-bind:href="link2">My github account</a>
      <a class="row m-auto" v-bind:href="link3">My portfolio</a>
    </div>
  </div>
</div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      img1:'https://images2.alphacoders.com/238/238870.jpg',
      img2:'https://images3.alphacoders.com/237/23765.jpg',
      img3:'https://images2.alphacoders.com/546/546077.jpg',
      avatar:'https://avatars0.githubusercontent.com/u/71636724?s=400&u=3284a44aeaa83a2171c5566719883526638c47c0&v=4',
      link1:'https://twitter.com/Mansur79812854',
      link2:'https://github.com/Mr-mansur',
      link3:'https://mansurmustafoyev.wixsite.com/-site'



    }
  }
}
</script>

<style>
img{
  height: 500px;
}
.carousel-inner{
  margin-top: 60px;
}
.card-image{
  width: 100px;
  height: 100px;
}
</style>
