import React from "react";
import "./Brands.css";

// 👉 yaha apne svg file paths add karo (jitne chaho)
import network from "../../assets/l1.svg";
import product from "../../assets/l2.svg";
import vertigo from "../../assets/l3.svg";
import proline from "../../assets/l4.svg";
import minty from "../../assets/l5.svg";

const brandSvgs = [network, product, vertigo, proline, minty];

const Brands = () => {
  return (
    <section className="brands-strip">
      <div className="brands-track">
        {brandSvgs.map((src, i) => (
          <div className="brand-item" key={i}>
            {/* svg as <img> so you can just provide file paths */}
            <img src={src} alt={`brand-${i + 1}`} className="brand-svg" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
