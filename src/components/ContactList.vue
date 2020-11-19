<template>
  <div class="contact-list">
    <table>
      <tr>
        <th>Contact</th>
        <th>Country</th>
        <th>City</th>
        <th>Phone number</th>
        <th>View contact</th>
        <th>Delete contact</th>
      </tr>
      <!-- display a list of contacts from our props "contacts", key="id" - for our delete func remove() -->
      <tr class="contact-card" v-for="(contact, id) in contacts" :key="id">
        <td>{{ contact.name }}</td>
        <td>{{ contact.country }}</td>
        <td>{{ contact.city }}</td>
        <td>{{ contact.phone }}</td>
        <td>
          <!-- use params ":name" (look at router ..index.js ) for dynamic paths for a single contact  -->
          <router-link
            :to="{ name: 'ContactPage', params: { name: contact.name } }"
          >
            <button>More info</button>
          </router-link>
        </td>

        <td>
          <button @click="remove(contact, id)">X</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  // accept props from the parent component
  props: {
    contacts: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    // calls the function "remove()" with args(contact, id) to confirm the deletion of the contact
    remove: function(contact, id) {
      if (
        window.confirm("Really want to delete contact: " + contact.name) == true
      ) {
        this.$delete(this.contacts, id);
      }
    }
  }
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
td {
  vertical-align: baseline;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
