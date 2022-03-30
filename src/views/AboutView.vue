<template>
  <div>
    <Header />
    <MuseumAllComponent />
    <div class="container my-5">
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
        <div class="col-md-6">
          <p class="title_all text-start text-md-end">• О нас</p>
          <div class="text-start text-md-end">
            <p>
              <span class="text-black fw-bold"
                >Государственный Музей Истории Узбекистана</span
              >
              был основан 12 июля 1876 года в качестве Народного Музея Туркестана.
            </p>
            <p>
              В короткое время с момента своего создания музей сумел пополнить не только
              свою главную экспозицию, но также и подготовил и провел ряд международных
              выставок: <span class="text-black fw-bold">в Париже</span> (в 1900 году) и в
              Милане (в 1906 году). Также музей способствовал открытию музеев в Самарканде
              (1896 год) и в Фергане (1899 год).
            </p>
            <p>
              <span class="text-black fw-bold"
                >Государственный Музей Истории Узбекистана</span
              >
              был основан 12 июля 1876 года в качестве Народного Музея Туркестана.
            </p>
            <p>
              В короткое время с момента своего создания музей сумел пополнить не только
              свою главную экспозицию, но также и подготовил и провел ряд международных
              выставок: в Париже (в 1900 году) и в Милане (в 1906 году). Также музей
              способствовал открытию музеев в Самарканде (1896 год) и в Фергане (1899
              год).
            </p>
          </div>
        </div>
      </div>
    </div>
    <Maps />
    <Footer />
  </div>
</template>
<script>
import Maps from "../components/Maps.vue";
import MuseumAllComponent from "../components/MuseumAllComponent.vue";
import Footer from "../components/Footer.vue";
import Header from "@/components/Header.vue";
export default { components: { Header, Footer, MuseumAllComponent, Maps } };
</script>
<style scoped></style>
