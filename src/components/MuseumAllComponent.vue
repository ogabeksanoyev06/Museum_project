<template>
  <div class="allComponent py-5 mt-3" style="background-color: #f5f9fd">
    <div class="container p-3">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div>
            <p class="title">Музей</p>
            <p class="name">Истории Узбекистана</p>
            <p class="text">
              Принимая во внимание показатели успешности, дальнейшее развитие различных
              форм деятельности способствует подготовке и реализации.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img_museum">
            <img
              class="rounded img-fluid"
              style="height: auto"
              src="../assets/Rectangle 2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<scrip>
export default {
    
}
</scrip>
<style scoped>
.allComponent .title {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #0029ff;
}
.allComponent .name {
  font-size: 65px;
  font-weight: 700;
  font-style: normal;
  color: #141414;
}
.allComponent .text {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  color: #000000;
  letter-spacing: 1.2px;
}
@media (max-width: 768px) {
  .allComponent .title {
    font-size: 20px;
  }
  .allComponent .name {
    font-size: 25px;
  }
  .allComponent .text {
    font-size: 16px;
  }
  .img_museum img {
    width: 400px;
    height: 300px;
  }
  .allComponent {
    text-align: center;
  }
}
</style>
