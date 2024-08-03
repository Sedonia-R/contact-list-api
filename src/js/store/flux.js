
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			currentContact: []
		},
		actions: {
			getContacts: async () => {
				const response = await fetch
					('https://playground.4geeks.com/contact/agendas/Sedonia/contacts', {
						method: 'GET'
					})
				const body = await response.json()
				setStore({
					contacts: body.contacts
				})
				console.log('fetched user contacts')
			},

			removeContact: async (contact_id) => {
				const response = await fetch
					(`https://playground.4geeks.com/contact/agendas/Sedonia/contacts/${contact_id}`, {
						method: "DELETE",
					})
				console.log('deleted contact');
			},

			createContact: async (name, email, phone, address) => {
				const { getContacts } = getActions();
				const response = await fetch('https://playground.4geeks.com/contact/agendas/Sedonia/contacts', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						"name": `${name}`,
						"email": `${email}`,
						"phone": `${phone}`,
						"address": `${address}`,
					}),
				});
				const body = await response.json();
				console.log('new contact created')
				return getContacts();
			},

			editContact: async (name, email, phone, address, contact_id) => {
				const { getContacts } = getActions();
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/Sedonia/contacts/${contact_id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						"name": `${name}`,
						"email": `${email}`,
						"phone": `${phone}`,
						"address": `${address}`,
					}),
				});
				const body = await response.json();
				console.log('contact updated')
				setStore({
					currentContact: []
				})
				return getContacts();
			},

			setCurrentContact: (contactToSet) => {
				try {
					for(let contact of getStore().contacts) {
						if(contactToSet.id == contact.id){
							setStore({
								currentContact: contact
							})
							console.log("Hey, I grabbed the contact!")
						}
					}
					console.log(getStore().contacts)
				} catch (error) {
					console.log("There was an error", error)
				}
			},
		}
	};
};

export default getState;
