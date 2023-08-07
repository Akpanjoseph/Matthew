import { Link } from "react-router-dom";

import easy from "../../../assert/Coffee break.png";
import report from "../../../assert/Annotation-amico.png";

const Features = () => {
  return (
    <main className="container">
      <div className="head-container">
        {/* title */}
        <h1 className="capitalize  text-center  text-3xl font-extrabold  lg:text-4xl "><span className="text-[#936EFF]">Why </span> use matthew</h1>
      </div>

      {/* feature 1 */}
      <section className="mt-10 px-4">

        <div className="flex flex-col items-center md:justify-between md:flex-row">
          {/* feature text */}
          <div className=" w-full md:w-[50%]">
            <h1 className="font-bold text-xl  lg:text-left">
              <span className="text-[#936EFF]">Easy </span>  to use
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              rerum? Amet repellendus error nemo aliquid magnam, assumenda sed
              quam eveniet minus aspernatur corporis nisi eaque dolorum soluta
              quidem voluptatibus doloribus!
            </p>
          </div>

          {/* feature image */}
          <div className="">
            <img src={easy} alt="" width={'300px'} />
          </div>
        </div>

        {/* feature 2 */}

        <div className="flex flex-col-reverse items-center space-y-3 md:justify-between md:flex-row    ">
          {/* feature image */}
          <div className="">
            <img src={'Working-amico.png'} alt="" width={'400px'} />
          </div>

          {/* feature text*/}
          <div className=" w-full md:w-[50%]">
            <h1 className="font-bold text-xl text-left">
              <span className="text-[#936EFF]">Productivity </span> Focused
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              rerum? Amet repellendus error nemo aliquid magnam, assumenda sed
              quam eveniet minus aspernatur corporis nisi eaque dolorum soluta
              quidem voluptatibus doloribus!
            </p>
          </div>
        </div>

        {/* feature 3 */}
        <div className=" flex  flex-col items-center md:justify-between md:flex-row  ">
          {/* feature text */}
          <div className=" w-full md:w-[50%]">
            <h1 className=" font-bold text-xl text-left">
            <span className="text-[#936EFF]">Generate</span> Report
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              rerum? Amet repellendus error nemo aliquid magnam, assumenda sed
              quam eveniet minus aspernatur corporis nisi eaque dolorum soluta
              quidem voluptatibus doloribus!
            </p>
          </div>

          {/* feature image */}
          <div className="">
            <img src={report} alt="" width={'300px'} />
          </div>
        </div>
      </section>

     
    </main>
  );
};

export default Features;
