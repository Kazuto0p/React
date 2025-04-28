import React from "react";
import './App.css';
import Card from "./Components/Card";
import Nav from "./Components/Nav";

class App extends React.Component {
  data = [
    { name: "Jeep", Cost: 20000, path: "/Images/181773-2560x1440-desktop-hd-jeep-wallpaper.jpg" },
    { name: "Maserati", Cost: 109000, path: "/Images/189882-3840x2160-desktop-4k-maserati-wallpaper-image.jpg" },
    { name: "Defender", Cost: 71325, path: "/Images/land_rover_defender_110_v8_carpathian_edition_2021_7_4k_5k_hd_cars.jpg" },
    { name: "Benz", Cost: 203500, path: "/Images/wallpaperflare.com_wallpaper (1).jpg" },
    { name: "Mustang", Cost: 61980, path: "/Images/ford_mustang_dark_horse_2024_car_4k_8k_hd_cars.jpg" },
    { name: "La Ferrari", Cost: `2.5 Million`, path: "/Images/ferrari-laferrari-2311-1.jpg" },
    { name: "911", Cost: 126100, path: "/Images/223804-1002119-car-20240229-133423-992-gt3rs-11.webp" },
    { name: "GT3-RS", Cost: 241300, path: "/Images/10809944.webp" },
    { name: "G-Wagon", Cost: 180150, path: "/Images/wallpaperflare.com_wallpaper.jpg" },
    { name: "Lamborghini", Cost: 507379, path: "/Images/lambo.jpg" },
  ]

  render() {
    return (
      <div className="container">
        <Nav/>
        <div className="main">
          {this.data.map((dt, index) => (
            <div className="card" key={index}>
              <Card name={dt.name} Cost={dt.Cost} path={dt.path} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
