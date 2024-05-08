import React from "react";
import Header from "../Components/Header";
import image from "../assets/Image.png";
import sparkle from "../assets/sparkle.png";
import rocket from "../assets/rocket.png";
import { Card } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Divider } from "@chakra-ui/react";
import "./Home.css";
import Fotter from "../Components/Fotter";
import Questions from "../Components/Questions";
import union from "../assets/Union.png";
import { FaArrowRight } from "react-icons/fa";
import Carousel from "../Components/Carousel";

function Home() {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-center py-10 w-11/12 m-auto">
        <p className="text-#2DA950 text-grace text-[36px] font-grace">
          Success stories
        </p>
        <p
          className="font-medium text-[56px] w-5/12 text-center text-manrope"
          style={{ lineHeight: "67.2px" }}
        >
          Every success journey we've encountered.
        </p>

        <div className="flex row justify-between my-10 w-full m-auto">
          <div className="w-7/12 flex relative justify-center items-center py-8">
            <img
              src={image}
              alt=""
              className="w-[420px] h-[450px] rounded-[50px] z-0"
            />
            <Card
              position="absolute"
              left="4.2rem"
              bottom="11rem"
              rounded="2xl"
              className="absolute left-7 w-[220px] bg-white rounded-2xl p-5"
            >
              <img
                src={sparkle}
                alt=""
                className="w-[79.17px] h-[78.48px]"
                style={{
                  position: "absolute",
                  top: "-23px",
                  left: "-12px",
                  padding: "5px",
                }}
              />
              <p className="text-4xl font-bold">40%</p>
              <p className="py-2 text-#828282 text-manrope">
                Achieved reduction in project execution time by optimising team
                availabity
              </p>
            </Card>

            <Card
              display="flex"
              flexDirection="row"
              alignItems="center"
              position="absolute"
              left="8rem"
              bottom="55px"
              rounded="full"
              className=" w-[200px] bg-white px-5 py-2"
            >
              <img src={rocket} alt="" className="w-[20px] h-[20px]" />
              <div className="ml-3">
                <p className="font-bold text-[18px]">10 DAYS</p>
                <p className="text-[13px] text-#828282">Staff Deployment</p>
              </div>
            </Card>

            <Card
              position="absolute"
              right="8rem"
              bottom="10px"
              color="white"
              backgroundColor="#002E18"
              rounded="2xl"
              className="absolute w-[220px] bg-white rounded-2xl p-5"
            >
              <p className="text-5xl">
                $0.5 <span className="text-lg text-#828282">MILLION</span>
              </p>
              <p className="py-2 text-#828282  text-manrope">
                Reduced client expenses by saving on hiring and employee costs.
              </p>
            </Card>
          </div>
          <div className="w-5/12 py-8 flex flex-col justify-between">

            <Carousel />

            <button className="text-manrope w-fit bg-slate-950 hover:bg-#454444 text-white px-8 py-6 font-[18px] border-[1px] rounded-full flex items-center">
              Explore More <FaArrowRight className="ml-4 " />
            </button>
          </div>
        </div>

        <div className="bg-#E8EEE7 w-full flex row p-10 rounded-2xl my-10">
          <div className="w-1/2">
            <p className="text-#9E9D9D font-grace text-[24px]">
              what's on your mind
            </p>
            <p className="text-[50px] font-medium text-manrope">
              Ask Questions
            </p>
            <img src={union} alt="" className="w-[400px] h-[400px] mt-10" />
          </div>
          <div className="flex flex-col w-1/2 pt-10">
            <Questions
              key={1}
              question={"Do you offer freelancers?"}
              answer={"Yes, we offer freelancers."}
            />
            <Divider orientation="horizontal" h="1px" backgroundColor="black" />
            <Questions
              key={2}
              question={
                "What’s the guarantee that I will be satisfied with the hired talent?"
              }
              answer={"Yes, we offer freelancers."}
            />
            <Divider orientation="horizontal" h="1px" backgroundColor="black" />
            <Questions
              key={3}
              question={"Can I hire multiple talents at once?"}
              answer={
                "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
              }
            />
            <Divider orientation="horizontal" h="1px" backgroundColor="black" />
            <Questions
              key={4}
              question={"Why should I not go to an agency directly?"}
              answer={"Yes, we offer freelancers."}
            />
            <Divider orientation="horizontal" h="1px" backgroundColor="black" />
            <Questions
              key={5}
              question={
                "Who can help me pick a right skillset and duration for me?"
              }
              answer={"Yes, we offer freelancers."}
            />
          </div>
        </div>
      </div>

      <Fotter />
    </div>
  );
}

export default Home;
