export default function About() {
    return (
        <div className="mt-20 bg-gray-100 min-h-screen py-4 px-2 sm:px-4 lg:px-6">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4">
                <h1 className="mb-3 text-2xl font-bold text-center">About Our Project</h1>
                <p className="text-md text-gray-700 mt-2">
                    Welcome to our car catalog application! This project is designed to help users explore a variety of cars, view detailed information about each car, and leave comments or feedback.
                </p>
                <p className="text-md text-gray-700 mt-2">
                    Our goal is to create a user-friendly platform where car enthusiasts can easily find information about different car models, including their specifications and user reviews.
                </p>
                <p className="text-md text-gray-700 mt-2">
                    This project was developed using React for the front-end, with a custom API serving the data. We aimed to implement best practices in both coding and UI design to provide a seamless and enjoyable user experience.
                </p>
                <p className="text-md text-gray-700 mt-2">
                    We hope you find this application useful and engaging. If you have any questions or feedback, feel free to reach out to us!
                </p>

                <h2 className="mt-6 text-xl font-semibold text-gray-900">Our Team</h2>
                <div className="mt-4">
                    <div className="flex items-center space-x-4 mb-4">
                        <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-13.png" alt="Team Member 1" className="w-16 h-16 object-cover rounded-full" />
                        <div>
                            <p className="text-md text-gray-700"><span className="font-bold">Developer:</span> Alex Smith</p>
                            <p className="text-md text-gray-700">Lead developer and project coordinator.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                        <img src="https://aboutleaders.com/wp-content/uploads/2022/01/Transformation-Leaderhip-Traits.jpg" className="w-16 h-16 object-cover rounded-full" />
                        <div>
                            <p className="text-md text-gray-700"><span className="font-bold">Designer:</span> John Doe</p>
                            <p className="text-md text-gray-700">Responsible for the visual design and user experience.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHibIe4cZzr__jX69NIoo5uIygxSUylfmPZ_Db5PCU2YMLSltq_R0yMBMYa9IjARK6L-w&usqp=CAU" alt="Team Member 3" className="w-16 h-16 object-cover rounded-full" />
                        <div>
                            <p className="text-md text-gray-700"><span className="font-bold">Project Manager:</span> Mike Johnson</p>
                            <p className="text-md text-gray-700">Oversees project timelines and ensures milestones are met.</p>
                        </div>
                    </div>
                </div>

                <p className="text-md text-gray-700 mt-2">
                    Thank you for visiting our project!
                </p>
            </div>
        </div>
    );
}

;
