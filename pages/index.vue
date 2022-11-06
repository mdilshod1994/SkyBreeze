<template>
  <div>
    <Promo />
    <MainServices />
    <trust-swiper />
    <our-services />
    <why-we />
    <service-packages />
    <reviews />
    <faq />
    <order />
  </div>
</template>

<script>
import Faq from '../components/main-page/Faq.vue'
import MainServices from '../components/main-page/MainServices.vue'
import Order from '../components/main-page/Order.vue'
import OurServices from '../components/main-page/OurServices.vue'
import Promo from '../components/main-page/Promo.vue'
import Reviews from '../components/main-page/Reviews.vue'
import ServicePackages from '../components/main-page/ServicePackages.vue'
import TrustSwiper from '../components/main-page/TrustSwiper.vue'
import WhyWe from '../components/reuse/WhyWe.vue'
export default {
  name: 'IndexPage',
  components: {
    Promo,
    MainServices,
    TrustSwiper,
    OurServices,
    WhyWe,
    ServicePackages,
    Reviews,
    Faq,
    Order
  },
  mounted() {
    window.addEventListener('scroll', function () {
      var pageHeight = document.querySelector('.promo').offsetHeight;
      var footerHeight = document.querySelector('.header').offsetHeight;
      var footerElement = pageHeight + footerHeight + 25;
      var scrollArrow = document.querySelector('html').scrollTop;
      var serviceSelection = document.querySelector('.service-selection');
      if (scrollArrow > footerElement) {
        serviceSelection.style.position = 'fixed';
        serviceSelection.style.top = '120px';
      } else {
        serviceSelection.style.position = 'absolute';
        serviceSelection.style.top = '0';
      }
    });
  }

}
</script>
