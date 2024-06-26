import React from "react";
import { HomeChemicalBalancing } from "../../assets";
import { SectionHeader } from "../common";

function ChemicalBalancing() {
    return (
        <div className='w-[80%] mx-auto my-[10%]'>
            <SectionHeader>Chemical Balancing System</SectionHeader>
            <div className="w-full flex flex-col-reverse lg:flex-row rounded-[30px] my-8 bg-gradient-to-br from-[#1E293B] to-76% to-[rgb(7,38,0)] from-23%">
                <img className="w-full lg:w-[40%] rounded-[20px] object-cover" src={HomeChemicalBalancing} alt="HomeChemicalBalancing" />

                <div className="w-full my-auto p-8 text-white leading-6 text-[20px] tracking-wide">
                    <p className="m-[1rem]">
                        Arduino-run sensors in the reservoir detect nutrient levels. A PID algorithm on a Raspberry Pi calculates amount of nutrients, pH buffer, and fresh water are that required.
                    </p>
                    <p className="m-[1rem]">
                        Signals are then sent to Arduino-run valves and pumps to deposit the appropriate amount of chemical into the reservoir.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default ChemicalBalancing;