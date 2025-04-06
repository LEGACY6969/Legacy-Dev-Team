import React from "react";

const BannerDetails = ({ reverse }) => {
  return (
      <section className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <div className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
            {/* text container */}
            <div
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-once="true"
                className={`flex flex-col items-start gap-4 text-left md:items-start p-4 md:p-8 md:text-left ${
                    reverse ? "md:order-last" : ""
                } `}
            >
              <h1 className="text-2xl md:text-4xl ">
                We Build the Best RP Server Experience on Legacy Roleplay!
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Unlock the Ultimate Roleplay Experience with Cutting-Edge Systems and Premium Features!
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                  <li className="font-medium">
                    Police MDT & Jail System – Complete law enforcement tools
                  </li>
                  <li className="font-medium">
                    Best Inventory System – Smooth and realistic inventory management
                  </li>
                  <li className="font-medium">
                    Dealership (Carshop) System – Buy,sell,seize,etc vehicles with in-game UI
                  </li>
                  <li className="font-medium">
                    GTA-V Animations Added AnimPanel – Realistic animations for better RP
                  </li>
                  <li className="font-medium">
                    etc...
                  </li>
                </ul>
              </div>
              <button className="btn-primary">Get Started</button>
            </div>

            {/* img container */}
            <div
                data-aos="fade-left"
                data-aos-duration="400"
                data-aos-once="true"
                className={reverse ? "order-1" : ""}
            >
              <img
                  src="/src/assets/about/img1.png"
                  alt="not found"
                  className="mx-auto w-full p-4 md:max-w-[400px] rounded-2xl shadow-2xl"
              />

            </div>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
            {/* text container */}
            <div
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-once="true"
                className={`flex flex-col items-start gap-4 text-left md:items-start p-4 md:p-8 md:text-left ${
                    reverse ? "md:order-last" : ""
                } `}
            >
              <h1 className="text-2xl md:text-4xl ">
                Best Premium Jobs – High-quality RP jobs with immersive features !
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Unlock the Ultimate Roleplay Experience with Cutting-Edge Systems and Premium Features!
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                  <li className="font-medium">
                    Airline Job – Fly planes & Transport Passngers with realistic flight mechanics
                  </li>
                  <li className="font-medium">
                    Famer Job – Grow crops & Sell them with in-game UI
                  </li>
                  <li className="font-medium">
                    Fishermaen Job – Catch fish & Sell them with in-game UI
                  </li>
                  <li className="font-medium">
                    Shop Job – Work at a shop & Sell items with in-game UI
                  </li>
                  <li className="font-medium">
                    etc...
                  </li>
                </ul>
              </div>
              <button className="btn-primary">Get Started</button>
            </div>

            {/* img container */}
            <div
                data-aos="fade-left"
                data-aos-duration="400"
                data-aos-once="true"
                className={reverse ? "order-1" : ""}
            >
              <img
                  src="/src/assets/about/img3.png"
                  alt="not found"
                  className="mx-auto w-full p-4 md:max-w-[400px] rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default BannerDetails;
