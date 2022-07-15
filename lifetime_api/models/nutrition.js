const db = require("../db");
const { BadRequestError } = require("../utils/error");

class Nutrition {
  static async listNutrition(userId) {
    const results = await db.query(
      `SELECT *
      FROM nutrition
      WHERE nutrit_id = $1;`,
      [userId]
    );
    return results.rows;
  }
  static async PostNutrition(nutritcreds, userId) {
    console.log(nutritcreds);
    if (nutritcreds.name.length === 0) {
      throw new BadRequestError("No nutrient name provided");
    }

    if (nutritcreds.category.length === 0) {
      throw new BadRequestError("No nutrition category provided");
    }

    if (nutritcreds.image.length === 0) {
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
                image_url,
               nutrit_id
            )
            VALUES ($1,$2,$3,$4,$5,$6)
            RETURNING nutrit_name,category,quantity,calories, image_url, nutrit_id;
            `,
      [
        nutritcreds.name,
        nutritcreds.category,
        nutritcreds.quantity,
        nutritcreds.calories,
        nutritcreds.image,
        userId,
      ]
    );
    const ress = result.rows[0];
    return ress;
  }
}

module.exports = Nutrition;
