<template>
  <div>
      <div class="modal" v-show="showModal">
        <h3>Details</h3>
        <button  @click.native="closeModal()" class="btn btnColor">Close</button>
      </div>
      <maskBg v-show="showModal" @click="closeModal()"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import maskBg from './MaskBg.vue';
export default {
  components: {
    maskBg,
  },
  computed: {
    ...mapGetters({
      showModal: 'getShowModal',
    }),
  },
  methods: {
    ...mapActions([
      'showOrHiddenModal',
    ]),
    closeModal() {
      this.showOrHiddenModal();
    },
  },
};
</script>

<style scoped>
  .modal {
    width: 100%;
    max-width: 500px;
    height: 300px;
    box-sizing: border-box;
    padding: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0 0 10px rgba(144,144,144,.2);
    border: 0;
    border-radius: 5px;
    line-height: 1.5em;
    opacity: 1;
    transition: all .5s;
    z-index: 1;
  } 
  .modal button {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

</style>
