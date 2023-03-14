import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditorPage from "./pages/EditorPage";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			<div>
				<Toaster
					position="top-center"
					toastOptions={{
						success: {
							duration: 3000,
							theme: {
								primary: "#0072c6",
							},
						},
					}}
				></Toaster>
			</div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/editor/:roomId" element={<EditorPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
