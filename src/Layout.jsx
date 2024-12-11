import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="max-w-7xl  p-4 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
