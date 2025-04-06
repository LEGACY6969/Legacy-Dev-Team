import React from "react";

const VerifiedContentCreator = () => {
    const creators = [
        {
            name: "DINGDONG GAMING",
            img: "/src/assets/streamers/img1.png",
            url: "https://www.youtube.com/@Dingdong_Gaming",
            //role: "Content Creator & Developer",
            //desc: "DINGDONG is a verified game streamer with over 2K subscribers across platforms like Twitch and YouTube. Specializing in high-intensity gameplay, gaming tutorials, and in-depth tech reviews. Catch him live for epic streams, giveaways, and more!",
        },
        {
            name: "SINHALION GAMING",
            img: "/src/assets/streamers/img2.png",
            url: "https://www.youtube.com/@Sinhaliongaming1",
            //role: "Founder & Content Creator",
            //desc: "SINHALION Gaming is a verified game streamer with over 408 subscribers across platforms like Twitch and YouTube. Specializing in high-intensity gameplay, gaming tutorials, and in-depth tech reviews. Catch him live for epic streams, giveaways, and more!",
        },
        {
            name: "KenG GAMING",
            img: "/src/assets/streamers/img3.png",
            url: "https://www.youtube.com/@KenGSL",
            //role: "Verified Content Creator",
            //desc: "KenG Gaming is a verified game streamer with over 100+ subscribers across platforms like Twitch and YouTube. Specializing in high-intensity gameplay, gaming tutorials, and in-depth tech reviews. Catch him live for epic streams, giveaways, and more!",
        },
        {
            name: "GUNE STREAM",
            img: "/src/assets/streamers/img4.png",
            //url: "https://www.youtube.com/@gune96",
            //role: "Verified Content Creator",
            //desc: "GUNE Gaming is a verified game streamer with over 100+ subscribers across platforms like Twitch and YouTube. Specializing in high-intensity gameplay, gaming tutorials, and in-depth tech reviews. Catch him live for epic streams, giveaways, and more!",
        },
        {
            name: "SH4GY STREAM",
            img: "/src/assets/streamers/img5.png",
            url: "https://www.youtube.com/channel/UCDBGlw9fmvVZwv2fiH6b6Kw",
            //role: "Verified Content Creator",
            //desc: "SH4GY Gaming is a verified game streamer with over 100+ subscribers across platforms like Twitch and YouTube. Specializing in high-intensity gameplay, gaming tutorials, and in-depth tech reviews. Catch him live for epic streams, giveaways, and more!",
        },
        {
            name: "C4N STREAM",
            img: "/src/assets/streamers/img6.png",
            url: "https://www.youtube.com/@c4nxd",
           //role: "Verified Content Creator",
            //desc: "C4N Gaming is a verified game streamer with over 700+ subscribers across platforms like Twitch and YouTube. Specializing in high-intensity gameplay, gaming tutorials, and in-depth tech reviews. Catch him live for epic streams, giveaways, and more!",
        },
    ];

    return (
        <div className="dark:bg-gray-900 dark:text-white py-10">
            <section className="container mx-auto px-4">
                <h1 className="text-center text-4xl font-bold mb-6">
                    VERIFIED CONTENT CREATOR
                </h1>
                <div className="flex justify-center flex-wrap gap-6">
                    {creators.map((creator, index) => (
                        <div
                            key={index}
                            className="w-full max-w-xs bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-br-sm shadow-2xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-blue-600/40"
                        >

                            <div className="mb-4 flex justify-center">
                                <img
                                    src={creator.img}
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <h2 className="text-2xl font-semibold mb-2">
                                    <a
                                        href={creator.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {creator.name}
                                    </a>
                                </h2>
                                <p className="text-lg text-slate-600 mb-4">{creator.role}</p>
                                <p className="text-lg mb-4">{creator.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default VerifiedContentCreator;
