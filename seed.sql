INSERT INTO agricultural_readings (temperature,humidity,soil_moisture,rainfall,soil_ph,location,crop_type,soil_type)
SELECT 27.50,61.20,34.80,4.20,6.70,'Field A - North','Wheat','Loamy'
WHERE NOT EXISTS (SELECT 1 FROM agricultural_readings)