import React from "react";

const StaffSection = () => {
    return (
        <div className="dark:bg-gray-900 dark:text-white py-10">
            <section className="container mx-auto px-4">
                <h1 className="text-center text-3xl font-bold mb-8">
                    Our Dedicated Staff
                </h1>
                <div className="flex justify-center flex-wrap gap-4">
                    {/* Staff Card */}
                    <div
                        className="w-60 bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-2xl shadow-2xl p-4">
                        <div className="flex justify-center mb-3">
                            <img
                                src="/src/assets/staff/staff2.png"
                                alt="Staff"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold">Kalana Nimsara</h2>
                            <p className="text-sm text-slate-600 dark:text-slate-400">FOUNDER </p>
                        </div>
                    </div>


                    {/* Duplicate and replace content for more staff members */}
                    <div
                        className="w-60 bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-2xl shadow-2xl p-4">
                        <div className="flex justify-center mb-3">
                            <img
                                src="/src/assets/staff/staff2.png"
                                alt="Staff"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold">Isuru Udana</h2>
                            <p className="text-sm text-slate-600 dark:text-slate-400">CO-FOUNDER </p>
                        </div>
                    </div>

                    <div
                        className="w-60 bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-2xl shadow-2xl p-4">
                        <div className="flex justify-center mb-3">
                            <img
                                src="/src/assets/staff/staff2.png"
                                alt="Staff"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold">VIDURA VIDUSHANKA</h2>
                            <p className="text-sm text-slate-600 dark:text-slate-400">CO-FOUNDER </p>
                        </div>
                    </div>

                    <div
                        className="w-60 bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-2xl shadow-2xl p-4">
                        <div className="flex justify-center mb-3">
                            <img
                                src="/src/assets/staff/staff2.png"
                                alt="Staff"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold">GINETH </h2>
                            <p className="text-sm text-slate-600 dark:text-slate-400">MAIN DEVELOPER OF LEGACY DEV
                                TEAM</p>
                        </div>
                    </div>

                    <div
                        className="w-60 bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-2xl shadow-2xl p-4">
                        <div className="flex justify-center mb-3">
                            <img
                                src="/src/assets/STAFF/staff4.png"
                                alt="Staff"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold">VIHANGA GAGANATHARU </h2>
                            <p className="text-sm text-slate-600 dark:text-slate-400">MAIN DEVELOPER|WEB DEVELOPER</p>
                        </div>
                    </div>

                    {/* Add more staff cards as needed */}
                </div>
            </section>
        </div>
    );
};

export default StaffSection;
