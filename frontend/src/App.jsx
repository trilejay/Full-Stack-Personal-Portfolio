import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './modules/HomePage.jsx';
import JobsPage from './modules/jobs/JobsPage.jsx';
import ContactPage from './modules/ContactPage.jsx';
import GalleryPage from './modules/GalleryPage.jsx';
import OrderPage from './modules/OrderPage.jsx';
import Navigation from './modules/Navigation.jsx';
import TopicsPage from './modules/TopicsPage';
import { AiFillCrown } from "react-icons/ai";
import products from './data/products.js';
import JobAdd from './modules/jobs/JobAdd';
import JobEdit from './modules/jobs/JobEdit';

function App() {
  const [count, setCount] = useState(0);
  const [movie, setMovie] = useState([]);
  const[job, setJob] = useState([]);
 
  return (
    <>
    <header>
    
    <h1> Matthew Ilejay <AiFillCrown /> </h1>
    </header>
    
    <Router>
    <Navigation />
        <main>
            <section>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/jobs" element={<JobsPage />}></Route>
                    <Route path="/contact" element={<ContactPage />}></Route>
                    <Route path="/gallery" element={<GalleryPage />}></Route>
                    <Route path="/order"   element={<OrderPage products={products} />}></Route>
                    <Route path="/topics" element={<TopicsPage />}></Route>
                    {/* <Route path="/moviesPage" element={<MoviesPage setMovie={setMovie} />}></Route> */}
                    <Route path="/jobsPage" element={<JobsPage setJob={setJob} />}></Route>
                    <Route path="/update" element={<JobEdit jobToEdit={job} />}></Route>
                    <Route path="/create" element={<JobAdd />} />
                </Routes>
            </section>
        </main>
    </Router>

    <footer>
        <p>&copy; {new Date().getFullYear()} Matthew Ilejay</p>
    </footer>
    </>
  )
}

export default App
