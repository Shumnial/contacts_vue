<template>
		<div class="contacts__item contact" v-if="contact">
			<div v-if="!onEdit">
				<div class="contact__info">
					<div class="contact__fullname">
						<p class="contact__firstname">{{ contact.firstname }}</p>
						<p class="contact__lastname">{{ contact.lastname }}</p>
					</div>
					<p class="contact__tel">{{ contact.tel }}</p>
				</div>
				<div class="contact__actions contact-action">
					<button @click="toggleEdit" class="contact-action__edit">Изменить</button>
					<button @click="$emit('contactDelete', contact.id)"  class="contact-action__del">Удалить</button>
				</div>
			</div>
			<div v-else>
				<form @submit.prevent="submitHandler" class="contacts-form" action="">
					<input type="text" v-model="firstname">
					<input type="text" v-model="lastname">
					<input type="text" v-model="tel">
					<button @click="toggleEdit">Отправить</button>
					<button @click="toggleEdit">Отменить</button>
				</form>
			</div>
		</div>
</template>

<script>
export default {
	name: "Contact",
	props: {
		contact: {
			type: Object,
			default: null
		}
	},
	data() {
		return {
			firstname: "",
			lastname: "",
			tel: "",
			onEdit: false
		};
	},
	methods: {
		toggleEdit() {
			this.onEdit = !this.onEdit;
		},
		submitHandler() {
			const contact = {
				firstname: this.firstname,
				lastname: this.lastname,
				tel: this.tel,
				id: this.contact.id
			};
			this.$emit("contactUpdate", contact);
		}
	},
	created() {
		this.firstname = this.contact.firstname;
		this.lastname = this.contact.lastname;
		this.tel = this.contact.tel;
	}
};
</script>

<style type="text/css">
.contacts-form {
	display: flex;
	flex-wrap: wrap;
}

.contacts-form button {
	margin-right: 5px;
}
</style>
