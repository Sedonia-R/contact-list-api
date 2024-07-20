const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
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

				// fetch('https://playground.4geeks.com/contact/agendas/Sedonia/contacts', {
				// 	method: 'GET'
				// })
				// .then((response) => response.json())
				// .then((body) => setStore({
				// 	contacts: body.contacts
				// }))
				console.log('fetched user contacts')
			},

			removeContact: (contact_id) => {
				fetch(
					`https://playground.4geeks.com/contact/agendas/Sedonia/contacts/${contact_id}`, {
						method: "DELETE",
					})
				// delete function goes here
				getContacts()
				console.log('deleted contact')
			},

			createContact: (name, email, phone, address) => {
				const { getContacts } = getActions();
				return fetch('https://playground.4geeks.com/contact/agendas/Sedonia/contacts', {
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
				})
				.then(response => response.json())
				.then((body) => getContacts())
				console.log('new contact created')
			},

			editContact: (name, email, phone, address, contact_id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/Sedonia/contacts/${contact_id}`, {
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
				})
				.then(response => response.json())
				getContacts()
				console.log('contact updated')
			}

			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
