<template>
  <div class="contact-page">
    <router-link class="to-home" to="/">
      <button>to home</button>
    </router-link>
    <!-- display a list of contacts from our database "../mocks/contacts" -->
    <div class="container" v-if="contact">
      <ul class="contact-page-template">
        <li>Name: {{ contact.name }}</li>
        <li>Country: {{ contact.country }}</li>
        <li>City: {{ contact.city }}</li>
        <li>Phone: {{ contact.phone }}</li>
        <li>Contact info: {{ contact.info }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import contacts from "../mocks/contacts";

export default {
  data() {
    return {
      contact: null
    };
  },
  // pass the contact name to the url address
  created() {
    const contact = contacts.find(
      contact => contact.name == this.$route.params.name
    );
    if (contact) {
      this.contact = contact;
    }
  }
};
</script>

<style scoped>
ul,
li {
  list-style: none;
  text-align: left;
}
.container {
  display: flex;
  justify-content: center;
  clear: both;
}
.contact-page-template {
  width: 100%;
  padding: 0 30px;
}
li {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
li:nth-child(even) {
  background-color: #dddddd;
}
.to-home {
  float: right;
}
</style>
