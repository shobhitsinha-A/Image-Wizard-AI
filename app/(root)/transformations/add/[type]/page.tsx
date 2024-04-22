import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "@/constants";
import Transformationform from "@/components/shared/Transformationform";

const UpdateTransformationTypePage = ({
  params: { type },
}: SearchParamProps) => {
  const transformation = transformationTypes[type];
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <Transformationform />
    </>
  );
};

export default UpdateTransformationTypePage;
