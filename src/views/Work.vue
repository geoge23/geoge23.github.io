<template>
  <div class="page">
    <div class="main-scroll">
      <h2>References</h2>
      <recommendation-card />
      <scroller :total="5" :selected="0" />
      <h2>Projects</h2>
      <entry>
        <template v-slot:img>
          <svg xmlns="http://www.w3.org/2000/svg" width="81.663" height="84.191" viewBox="0 0 81.663 84.191">
          <g id="Group_15" data-name="Group 15" transform="translate(-7.499 -6.9)">
            <g id="Layer_2" transform="translate(10.858 14.103)">
              <rect id="Rectangle_6" data-name="Rectangle 6" width="78.304" height="10.442" fill="#ed1c24"/>
              <rect id="Rectangle_7" data-name="Rectangle 7" width="78.304" height="10.442" transform="translate(0 15.342)" fill="#ed1c24"/>
              <rect id="Rectangle_8" data-name="Rectangle 8" width="78.304" height="10.442" transform="translate(0 31.325)" fill="#ed1c24"/>
              <rect id="Rectangle_9" data-name="Rectangle 9" width="78.304" height="10.442" transform="translate(0 46.269)" fill="#ed1c24"/>
              <rect id="Rectangle_10" data-name="Rectangle 10" width="78.304" height="10.442" transform="translate(0 60.884)" fill="#ed1c24"/>
            </g>
            <g id="Layer_1" transform="translate(7.499 6.9)">
              <g id="layer1" transform="translate(0 0)">
                <rect id="rect8394" width="7.204" height="8.485" transform="translate(11.7 16.97)" fill="#282a74"/>
                <rect id="rect8396" width="7.186" height="9.784" transform="translate(11.717)" fill="#282a74"/>
                <path id="rect8398" d="M75.069,284.1H67.917a.017.017,0,0,0-.017.017v21.524a.017.017,0,0,0,.017.017h7.169a.017.017,0,0,0,.017-.017L75.069,284.1Z" transform="translate(-56.183 -250.16)" fill="#282a74"/>
                <rect id="rect8400" width="7.186" height="20.225" transform="translate(11.717 63.966)" fill="#282a74"/>
                <path id="path8403" d="M34.792,142.168c-.641-3.117-4.554-5.039-7.169-5.091s-2.407.294-5.229,1.957C18.619,141.285.8,134.341.246,150.5c-.623,17.836,24.831,6.1,24.052,15.065-.121,1.3-1.662,3.377-3.861,4.139v6.528c3.619.208,10.442-3.913,10.511-11.1.173-16.5-25.663-4.675-25.437-14.3.208-8.658,12.97-6.58,16.883-5.281s1.3,1.3,5.229,1.3S34.151,144.9,34.792,142.168Z" transform="translate(-0.235 -128.592)" fill="#282a74"/>
                <path id="path8405" d="M11.186,347.211s-4.762,1.749-4.537,3.913c0,4.571,23.5-.779,23.5,13.7,0,8.814-9.143,9.784-9.143,9.784v-3.9s4.5-3.29,3.827-6.563c-1.9-9.195-23.931,1.3-23.931-13.4,0-7.255,10.286-10.043,10.286-10.043Z" transform="translate(-0.785 -296.959)" fill="#282a74"/>
                <path id="path8407" d="M26.976,521.714c-3.775.294-4.1,2.494-5.853,4.346-3.6-1.766,2.1-6.216,5.853-8.26Z" transform="translate(-16.558 -443.393)" fill="#282a74"/>
                <path id="rect10391" d="M154.535,151.557a1.578,1.578,0,0,1,2.771-.918C157.825,151.072,154.275,152.337,154.535,151.557Z" transform="translate(-127.805 -139.367)" fill="#282a74"/>
              </g>
            </g>
          </g>
        </svg>
        </template>
      </entry>
      <entry>
        <template v-slot:img>
          <img src="@/assets/logo.png" alt="" class="image">
        </template>
      </entry>
    </div>
    <stripe />
  </div>
</template>

<script>
import Entry from '../components/Entry.vue'
import RecommendationCard from '../components/RecommendationCard.vue'
import Scroller from '../components/Scroller.vue'
import Stripe from '../components/Stripe.vue'
export default {
  components: {
    RecommendationCard,
    Scroller,
    Entry,
    Stripe
  }
}
</script>

<style scoped>
.main-scroll {
  display: flex;
  justify-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  font-weight: 400;
  text-transform: lowercase;
  letter-spacing: 0.3rem;
}
</style>
