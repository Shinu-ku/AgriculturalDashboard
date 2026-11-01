import { db } from "hatchable";
export const access = "public";

export default async function(req,res){
  const { rows } = await db.query("SELECT * FROM agricultural_readings ORDER BY recorded_at DESC LIMIT 1");
  const latest = rows[0] || {
    temperature:27.5, humidity:61.2, soil_moisture:34.8, rainfall:4.2, soil_ph:6.7,
    location:"Field A - North", crop_type:"Wheat", soil_type:"Loamy"
  };
  res.json({latest});
}