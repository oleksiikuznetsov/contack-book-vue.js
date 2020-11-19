<template>
  <div class="all-contacts">
    <div class="book-header">
      <h2>Contact Book</h2>
      <button @click="show = !show">{{ btnAdd }}</button>
      <p class="contactLength">
        You have: {{ contacts.length }} {{ ifContacts }}
      </p>
    </div>
    <transition name="fade">
      <div class="add-contact-container" v-if="show">
        <h3>Add new contact</h3>
        <table>
          <tr>
            <th>Contact</th>
            <th>Country</th>
            <th>City</th>
            <th>Phone number</th>
            <th></th>
          </tr>
          <tr>
            <td>
              <input
                id="contactName"
                type="text"
                placeholder="Enter contact name"
                required
              />
              <p class="errorMsg">{{ this.errors[0] }}</p>
            </td>
            <td>
              <input
                id="contactCountry"
                type="text"
                placeholder="Enter contact country"
                required
              />
              <p class="errorMsg">{{ this.errors[1] }}</p>
            </td>
            <td>
              <input
                id="contactCity"
                type="text"
                placeholder="Enter contact city"
                required
              />
              <p class="errorMsg">{{ this.errors[2] }}</p>
            </td>
            <td>
              <input
                id="contactPhone"
                type="text"
                placeholder="Enter contact phone number"
                required
              />
              <p class="errorMsg">{{ this.errors[3] }}</p>
            </td>
            <td>
              <button @click="addContact()">Add contact</button>
            </td>
          </tr>
        </table>

        <hr />
      </div>
    </transition>
    <!-- call the component "ContactList" and pass it our data props "contacts" -->
    <ContactList :contacts="contacts" />
  </div>
</template>

<script>
import ContactList from "../components/ContactList.vue";
import contacts from "../mocks/contacts";

export default {
  // register the component that we will use "ContactList"
  components: { ContactList },
  data() {
    return {
      contacts,
      show: false,
      errors: []
    };
  },
  computed: {
    // change the name of the button that calls the menu to add a contact
    btnAdd() {
      if (this.show !== true) {
        return "Add contact menu";
      }
      {
        return "Close contact menu";
      }
    },
    // change the output of the number of contacts to plural and singular
    ifContacts() {
      if (this.contacts.length <= 1) {
        return "contact";
      }
      {
        return "contacts";
      }
    }
  },
  methods: {
    addContact() {
      // I know it's not dynamic but ...
      let name = document.querySelector("#contactName");
      let country = document.querySelector("#contactCountry");
      let city = document.querySelector("#contactCity");
      let phone = document.querySelector("#contactPhone");
      // console.log(name.value)
      // validation for blank fields, if fields is blank show erros and dont add contact
      if (
        name.value == "" ||
        country.value == "" ||
        city.value == "" ||
        phone.value == ""
      ) {
        this.errors.push(
          "Add user name is required*",
          "Add user country is required*",
          "Add user city is required*",
          "Add user phone is required*"
        );
        return this.errors;
      }
      // if all fields or some is !blank sand data.value from inputs to our database array "contacts"

      // alert confirm if click "ok == true" - added contact
      // alert confirm if click "no == false" - close func addContact() and close "add contact menu"
      if (window.confirm("New contact " + name.value + " added") == true) {
        this.contacts.push({
          name: name.value,
          country: country.value,
          city: city.value,
          phone: phone.value
        });
        this.show = false;
        return (this.errors = []);
      }
      // close func addContact and close "add contact menu"
      {
        this.show = false;
        return;
      }
    }
  }
};
</script>

<style>
.book-header {
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  margin: 0 30px;
  padding: 5px 15px;
  background: #fdfdfd;
  border: 2px solid #d2d2d2;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
  transition: 0.2s ease;
}
button:hover {
  background: #f2f2f2;
  border: 2px solid #f1f1f1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0.2;
}
.add-contact-container {
  margin: 30px 0;
}
.errorMsg {
  font-size: 12px;
  margin: 5px 0;
}
</style>
