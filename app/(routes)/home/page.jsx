import React from "react";
import TextGeneration from "./(components)/TextGeneration";
import RaceInput from "./(components)/RaceInput";

const page = () => {
  return (
    <div>
      <div className="space-y-2">
        <TextGeneration />
        <RaceInput />
      </div>
    </div>
  );
};

export default page;
