import React from "react";
import Head from "next/head";

import { FlameOutline, RestaurantOutline, StarOutline } from "react-ionicons";

import Check from "./Check";

function Meals() {
  return (
    <div
      id="meals"
      className=" px-8 sz550:px-16 lg:px-20 xl:px-28 py-16 bg-white"
    >
      <h2 className=" flex flex-col text-center ">
        <span className=" text-omnifood-shade_1 font-medium text-xs sm:text-sm xl:text-md block mb-3">
          MEALS
        </span>
        <span className=" text-tg-g_333 font-semibold text-2xl sm:text-3xl xl:text-4xl block mb-24 xl:mb-28">
          Omnifood AI chooses from 5,000+ recipes
        </span>
      </h2>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
        <div className=" shadow-omnifood w-full sm:w-2/3 md:w-full justify-self-center  rounded-lg overflow-hidden">
          <img src="./meals/meal-1.jpg" />

          <div className="  p-6 xl:p-10 pb-0 text-tg-g_333">
            <span className=" text-xs uppercase font-semibold bg-[#51CF66] px-3 py-1 rounded-full inline-block mb-3 xl:mb-2">
              Vegetarian
            </span>
            <h4 className=" font-semibold text-xl xl:text-2xl block mb-8 tracking-wide ">
              Japanese Gyozas
            </h4>

            <div className="text-omnifood-primary flex mb-8">
              <div className="mr-6 flex items-center justify-center">
                <FlameOutline
                  color={"#e67e22"}
                  height="1.75rem"
                  width="1.75rem"
                />
              </div>

              <span className=" text-tg-g_555 text-lg">
                <span className="font-semibold">650</span> calories
              </span>
            </div>

            <div className="text-omnifood-primary flex mb-8">
              <div className="mr-6 flex items-center justify-center">
                <RestaurantOutline
                  color={"#e67e22"}
                  height="1.75rem"
                  width="1.75rem"
                />
              </div>
              <span className=" text-tg-g_555 text-lg">
                Nutriscore &reg;<span className="font-semibold"> 74</span>
              </span>
            </div>

            <div className="text-omnifood-primary flex mb-8">
              <div className="mr-6 flex items-center justify-center">
                <StarOutline
                  color={"#e67e22"}
                  height="1.75rem"
                  width="1.75rem"
                />
              </div>
              <span className=" text-tg-g_555 text-lg">
                <span className="font-semibold">4.9</span> rating (537)
              </span>
            </div>
          </div>
        </div>

        <div className=" shadow-omnifood w-full sm:w-2/3 md:w-full justify-self-center  rounded-lg overflow-hidden">
          <img src="./meals/meal-2.jpg" />

          <div className=" p-6 xl:p-10 pb-0 text-tg-g_333">
            <span className=" text-xs uppercase font-semibold bg-[#51CF66] px-3 py-1 rounded-full inline-block mb-3 xl:mb-2 mr-4">
              Vegetarian
            </span>

            <span className=" text-xs uppercase font-semibold bg-[#FFD43B] px-3 py-1 rounded-full inline-block mb-3 xl:mb-2">
              Paleo
            </span>

            <h4 className=" font-semibold text-xl xl:text-2xl block mb-8 tracking-wide ">
              Avocado Salad
            </h4>

            <div className="text-omnifood-primary flex mb-8">
              <div className="mr-6 flex items-center justify-center">
                <FlameOutline
                  color={"#e67e22"}
                  height="1.75rem"
                  width="1.75rem"
                />
              </div>

              <span className=" text-tg-g_555 text-lg">
                <span className="font-semibold">400</span> calories
              </span>
            </div>

            <div className="text-omnifood-primary flex mb-8">
              <div className="mr-6 flex items-center justify-center">
                <RestaurantOutline
                  color={"#e67e22"}
                  height="1.75rem"
                  width="1.75rem"
                />
              </div>
              <span className=" text-tg-g_555 text-lg">
                Nutriscore &reg;<span className="font-semibold"> 92</span>
              </span>
            </div>

            <div className="text-omnifood-primary flex mb-8">
              <div className="mr-6 flex items-center justify-center">
                <StarOutline
                  color={"#e67e22"}
                  height="1.75rem"
                  width="1.75rem"
                />
              </div>
              <span className=" text-tg-g_555 text-lg">
                <span className="font-semibold">4.8</span> rating (441)
              </span>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-2/3 md:w-full justify-self-center">
          <span className=" text-2xl xl:text-3xl  font-semibold text-tg-g_333 block mb-6">
            Works with any diet:
          </span>

          <Check meal="Vegetarian" />

          <Check meal="Vegan" />

          <Check meal="Pescatarian" />

          <Check meal="Gluten-free" />

          <Check meal="Lactose-free" />

          <Check meal="Keto" />

          <Check meal="Paleo" />

          <Check meal="Low-FODMAP" />

          <Check meal="Kid-friendly" />
        </div>
      </div>

      <div className="flex justify-center mt-14">
        <button className="inline-block text-omnifood-primary pb-1 border-b-2 border-omnifood-primary text-base md:text-lg hover:border-transparent hover:text-omnifood-shade_1 transition-all">
          See all recipes &rarr;
        </button>
      </div>
    </div>
  );
}

export default Meals;
