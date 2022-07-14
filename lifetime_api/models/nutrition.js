const db = require("../db");
const { BadRequestError } = require("../utils/error");

class Nutrition {
  static async listNutrition(user) {
    const results = await db.query(
      `SELECT *
      FROM nutrition
      WHERE nutrit_id = $1;`,
      [user.id]
    );
    return results.rows;
  }
  static async PostNutrition({ nutritcreds, user }) {
    if (nutritcreds.nutrit_name.length === 0) {
      throw new BadRequestError("No nutrient name provided");
    }

    if (nutritcreds.category.length === 0) {
      throw new BadRequestError("No nutrition category provided");
    }

    if (nutritcreds.image_Url.length === 0) {
      throw new BadRequestError("Must provide imageUrl");
    }

    if (nutritcreds.quantity === 0) {
      throw new BadRequestError("Nutrition quantity cannot be zero");
    }

    if (nutritcreds.calories === 0) {
      throw new BadRequestError("Nutrition calories cannot be zero");
    }
    const result = await db.query(
      `
            INSERT INTO nutrition(
                nutrit_name,
                category,
                quantity,
                calories,
                imageUrl,
               nutrit_id
            )
            VALUES ($1,$2,$3,$4,$5,$6)
            RETURNING nutrit_id,nutrit_name,category,quantity,calories;
            `,
      [
        nutrition.nutrit_name,
        nutrition.category,
        nutrition.quantity,
        nutrition.calories,
        nutritionimage_Url,
        user.id,
      ]
    );
    const ress = result.rows[0];
    return ress;
  }
}

module.exports = Nutrition;
