import * as React from "react";
import "./NutritionDetail.css";
import NutritionCard from "./NutritionCard";
import { useParams } from "react-router-dom";

export default function NutritionDetail(props) {
  const { nutritionId } = useParams();
  const overview = [];

  return (
    <div className="nutrition-detail">
      {props.nutrition.map((element, idx) => {
        if (element.id == nutritionId) {
          // return <NutritionCard></NutritionCard>
          return (
            <NutritionCard
              key={idx}
              quantity={element.quantity}
              imageUrl={element.image_url}
              name={element.name}
              calories={element.calories}
              category={element.category}
              createdAt={element.created_at}
              id={element.id}
            ></NutritionCard>
          );
        }
      })}
    </div>
  );
}
