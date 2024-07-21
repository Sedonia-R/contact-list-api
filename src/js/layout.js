import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Contacts } from "./views/Contacts";
import { AddContact } from "./views/AddContact";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/index.html" element={<Contacts />} />
						<Route path="/" element={<Contacts />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/add" element={<AddContact />} />
						<Route path="/edit" element={<AddContact />} />
						<Route path="*" element={<h1>Oops! Something went wrong...</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
