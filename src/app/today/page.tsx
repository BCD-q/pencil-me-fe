import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TodayPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Header />
            <div className="w-72 bg-white shadow-lg h-80">
                {/* Add your content here */}
            </div>
            <Footer />
        </div>
    );
};

export default TodayPage;
