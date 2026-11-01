CREATE TABLE IF NOT EXISTS agricultural_readings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  temperature NUMERIC(6,2) NOT NULL,
  humidity NUMERIC(6,2) NOT NULL,
  soil_moisture NUMERIC(6,2) NOT NULL,
  rainfall NUMERIC(6,2) NOT NULL,
  soil_ph NUMERIC(4,2) NOT NULL,
  location TEXT NOT NULL,
  crop_type TEXT NOT NULL,
  soil_type TEXT NOT NULL,
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)