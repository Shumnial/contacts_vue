<template>
	<div class="contacts">
		<div class="contacts__panel contacts-panel">
			<form @submit.prevent="addContact">
				<input type="text" name="firstname" placeholder="Имя">
				<input type="text" name="lastname" placeholder="Фамилия">
				<input type="text" name="tel" placeholder="Телефон">
				<input type="submit" value="Добавить">
			</form>
		</div>
		<div class="contacts__list">
			<Contact 
				v-for="item in contacts"
				@contactDelete="contactDelete"
				@contactUpdate="contactUpdate"
				:contact="item"
				/>
		</div>
	</div>
</template>

<script>
import Vue from "vue";
import Contact from "./Contact.vue";
import contacts from "@/data/contacts.js";
import { getRandomId } from "@/helpers/index.js";
Vue.component("Contact", Contact);

export default {
	name: "Contacts",
	components: {
		Contact
	},
	data() {
		return {
			form: {},
			contacts: []
		};
	},
	methods: {
		addContact() {
			const { firstname, lastname, tel } = this.form;
			this.contacts.push({ firstname, lastname, tel });
		},
		contactDelete(tel) {
			const card = this.contacts.findIndex(el => el.tel === tel);
			if (!tel || card === -1) return;
			this.contacts.splice(card, 1);
		},
		contactUpdate(contact) {
			let idx = this.contacts.findIndex(n => n.id === contact.id);
			let card = this.contacts[idx];
			if (!card) return;
			card = Object.assign({}, card, contact);
			this.contacts.splice(idx, 1, card);
		}
	},
	created() {
		this.contacts = contacts.map(n => {
			return Object.assign({}, n, { id: getRandomId() });
		});

		console.log("getRandomId(: ", getRandomId());
	}
};
</script>

<style>
input {
	padding: 10px;
	margin-bottom: 15px;
}

.contacts {
	position: relative;
	width: 650px;
	margin: 0 auto;
}

.contacts-panel {
	margin-bottom: 20px;
}

.contacts__list {
	min-height: 50px;
	border: 1px solid black;
}

.contact {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 25px 20px;
	border: 1px solid gray;
}

.contact__info {
	display: flex;
}

.contact__firstname {
	margin-right: 5px;
}

.contact__lastname {
	margin-right: 10px;
}

.contact__fullname {
	display: flex;
}

.contacts-form {
	display: flex;
}
</style>
