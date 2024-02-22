import React from "react";
import {
  INFOCARD_1_TEXT,
  INFOCARD_2_TEXT,
  INFOCARD_3_TEXT,
  WHO_WE_ARE_TEXT,
  LEARN_MORE_LINK,
  LEARN_MORE_LINK_TEXT,
} from "../../constant/recruitment";
import { ConcentricOctagons, TeamDiscussion } from "../../assets";
import { HiArrowSmRight } from "react-icons/hi";

const RecruitmentS2 = () => {
  return (
    <div className="mt-12 text-center mx-auto p-6">
      <div className="grid grid-cols-2 gap-4" style={{ 
        backgroundImage: `url(${ConcentricOctagons})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      backgroundSize: '80%',
        
      }}>
        <div class="col">
          <h1 className="text-4xl mb-[2%] text-[#3A3A3A] text-left md:ml-24 ml-12">
            Who we are
          </h1>
          <ExpandedInfoCard
            descriptionText={WHO_WE_ARE_TEXT}
          ></ExpandedInfoCard>
        </div>
        <div class="col">
          <h1 className="text-4xl mb-[2%] text-[#3A3A3A] text-left md:ml-24 ml-12">
            Who you are
          </h1>
          <InfoCard descriptionText={INFOCARD_1_TEXT}></InfoCard>
          <InfoCard descriptionText={INFOCARD_2_TEXT}></InfoCard>
          <InfoCard descriptionText={INFOCARD_3_TEXT}></InfoCard>
        </div>
      </div>
    </div>
  );
};

function InfoCard(props) {
  const { titleText, descriptionText } = props;
  return (
    <div className="rounded-lg mx-auto bg-white border border-black p-6 my-7 max-w-[500px] shadow-lg">
      <h2 className="text-xl font-bold mb-2">{titleText}</h2>
      <p>{descriptionText}</p>
    </div>
  );
}

function ExpandedInfoCard(props) {
  const { titleText, descriptionText, linkText, image } = props;
  return (
    <div className="rounded-lg mx-auto border bg-gray-700 my-5 max-w-[500px] shadow-lg">
      <div class="p-4">
        <h2 className="text-xl font-bold mb-2 text-white-500">{titleText}</h2>
        <p className="text-white mb-3">{descriptionText}</p>
        <a href={LEARN_MORE_LINK} className="flex items-center text-center mx-auto justify-center text-lime-600 font-bold underline">
          {LEARN_MORE_LINK_TEXT} <HiArrowSmRight></HiArrowSmRight>
        </a>
      </div>
        <img src={TeamDiscussion} className="w-[100%]" />
    </div>
  );
}

export default RecruitmentS2;
