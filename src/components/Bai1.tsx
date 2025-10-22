import { useState } from "react";
import axios from "axios";

export default function Bai1() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const getWeather = async () => {
    if (!city) return;
    const res = await axios.get(`https://wttr.in/${city}?format=j1`);
    setWeather(res.data.current_condition[0]);
  };

  return (
    <div className="container">
      <h2>Bài 1: Ứng dụng thời tiết</h2>
      <input
        type="text"
        placeholder="Nhập tên thành phố..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Xem thời tiết</button>

      {weather && (
        <div>
          <p><strong>Nhiệt độ:</strong> {weather.temp_C}°C</p>
          <p><strong>Tình trạng:</strong> {weather.weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
}
