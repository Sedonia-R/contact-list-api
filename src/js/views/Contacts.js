import React, { useContext, useEffect } from "react";
import { Link, redirect } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";

export const Contacts = ()=> {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.setCurrentContact([])
    }, [])

    return (
        <div className="container">
            <div>
                <p className="text-right my-3">
                    <Link className="btn btn-success" to="/add">Add new contact</Link>
                </p>
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <ul className="list-group pull-down" id="contact-list">
                        {store.contacts.map(contact => {
                            return <ContactCard key={contact.id} contact={contact}/>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
