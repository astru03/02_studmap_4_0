import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [showLayerSubmenu, setShowLayerSubmenu] = useState(false);
  const [showCategorySubmenu, setShowCategorySubmenu] = useState(false);

  const toggleLayerSubmenu = () => {
    setShowLayerSubmenu(!showLayerSubmenu);
  };

  const toggleCategorySubmenu = () => {
    setShowCategorySubmenu(!showCategorySubmenu);
  };

  return (
    <div className="sidebar">
      <h2>Menü</h2>
      <ul>
        <li onClick={toggleLayerSubmenu}>
          Layer
          {showLayerSubmenu && (
            <ul>
              <li onClick={toggleCategorySubmenu}>
                Kategorie 1
                {showCategorySubmenu && (
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" />
                        Subkategorie 1
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        Subkategorie 2
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        Subkategorie 3
                      </label>
                    </li>
                  </ul>
                )}
              </li>
              <li>Kategorie 2</li>
              <li>Kategorie 3</li>
            </ul>
          )}
        </li>
        <li>Upload</li>
        <li>NDVI</li>
      </ul>
    </div>
  );
};

export default Sidebar;
