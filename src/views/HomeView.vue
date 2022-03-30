<template>
  <div class="">
    <Header />
    <MuseumAllComponent />
    <div class="mt-4 box">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div
              class="d-flex flex-wrap justify-content-center py-5"
              style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)"
            >
              <img class="img-fluid m-1" src="../assets/Rectangle 45.png" alt="" />
              <img class="img-fluid m-1" src="../assets/Rectangle 46.png" alt="" />
              <img class="img-fluid m-1" src="../assets/Rectangle 47.png" alt="" />
              <img class="img-fluid m-1" src="../assets/Rectangle 48.png" alt="" />
            </div>
          </div>
          <div class="col-md-6 mt-5 mt-md-0">
            <p>
              Немного <span class="text-primary">о нашей истории</span> и в целом
              <span class="text-primary">о нас</span>
            </p>
            <p>
              <span class="text-black">Государственный Музей Истории Узбекистана</span>
              был основан 12 июля 1876 года в качестве Народного Музея Туркестана.
            </p>
            <p>
              +998987744580 993892894 В короткое время с момента своего создания музей
              сумел пополнить не только свою главную экспозицию, но также и подготовил и
              провел ряд международных выставок:
              <span class="text-black">в Париже</span> (в 1900 году) и в Милане (в 1906
              году). Также музей способствовал открытию музеев в Самарканде (1896 год) и в
              Фергане (1899 год).
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- carusel photo -->
    <div class="container my-5">
      <p class="title_all">• Галерея</p>
     
    </div>
    <!-- carusel photo -->

    <!-- question savollar -->
    <div class="my-5 container"><Question /></div>
    <!-- question savollar -->

    <!-- email and maps -->
    <div class="container">
      <Maps />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import MuseumAllComponent from "../components/MuseumAllComponent.vue";
import Question from "@/components/QuestionView.vue";
import Maps from "../components/Maps.vue";
export default {
  name: "HomeView",
  data() {
    return {
      activeNames: [""],
    };
  },
  components: {
    Header,
    Footer,
    MuseumAllComponent,
    Question,
    Maps,
  },
};
</script>
<style scoped>
.box p:nth-child(1) {
  font-size: 35px;
  font-weight: 700;
}
.box p:nth-child(2) {
  font-size: 18px;
  font-weight: 500;
}
.box p:nth-child(3) {
  font-size: 18px;
  font-weight: 500;
}
@media (max-width: 768px) {
  .box p:nth-child(1) {
    font-size: 22px;
  }
  .box p:nth-child(2) {
    font-size: 14px;
  }
  .box p:nth-child(3) {
    font-size: 14px;
  }
} ;
</style>
