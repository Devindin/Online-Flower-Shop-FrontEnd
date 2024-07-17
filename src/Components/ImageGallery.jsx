import React from 'react';
import img1 from "../Images/gallary3.jpg";
import img2 from "../Images/gallary5.jpg";
import img3 from "../Images/gallery10.jpg";
import img4 from "../Images/gallery6.jpg";
import img5 from "../Images/gallery2.jpg";
import img6 from "../Images/gallery1.jpg";
import img7 from "../Images/gallery7.jpg";
import img8 from "../Images/gallry4.jpg";
import img9 from "../Images/gallery9.jpg";
import img10 from "../Images/gallery8.jpg";

const ImageGallery = () => {

  return (
    <div className="flex justify-center p-8">
      <table className="table-auto border-collapse">
        <tbody>
          {/* First row */}
          <tr>
            {/* First row, first column (split into two rows and two columns) */}
            <td className="p-2">
              <table className="table-auto border-collapse w-full h-full">
                <tbody>
                  <tr>
                    <td className="p-2">
                      <img src={img1} alt="Image 1" className="w-80 h-80 mx-auto my-2 transform hover:scale-105 transition-transform duration-300" /> {/* Hover effect */}
                    </td>
                    <td className="p-2">
                      <img src={img2} alt="Image 2" className="w-80 h-80 mx-auto my-2 transform hover:scale-105 transition-transform duration-300" /> {/* Hover effect */}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      <img src={img3} alt="Image 3" className="w-80 h-80 mx-auto my-2 transform hover:scale-105 transition-transform duration-300" /> {/* Hover effect */}
                    </td>
                    <td className="p-2">
                      <img src={img4} alt="Image 4" className="w-80 h-80 mx-auto my-2 transform hover:scale-105 transition-transform duration-300" /> {/* Hover effect */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            {/* First row, second column */}
            <td className="p-2">
              <img src={img5} alt="Image 6" className="w-160 h-160 mx-auto my-2 transform hover:scale-105 transition-transform duration-300" /> {/* Hover effect */}
            </td>
          </tr>
          {/* Second row */}
          <tr>
            {/* Second row, first column */}
            <td className="p-2">
              <img src={img6} alt="Image 6" className="w-160 h-160 mx-auto my-2 transform hover:scale-105 transition-transform duration-300" /> {/* Hover effect */}
            </td>
            {/* Second row, second column (split into two rows and two columns) */}
            <td className="p-2">
              <table className="table-auto border-collapse w-full h-full">
                <tbody>
                  <tr>
                    <td className="p-2">
                      <img src={img7} alt="Image 1" className="w-80 h-80 mx-auto my-2 transform hover:scale-105 transition-transform duration-300" /> {/* Hover effect */}
                    </td>
                    <td className="p-2">
                      <img src={img8} alt="Image 2" className="w-80 h-80 mx-auto my-2 transform hover:scale-105 transition-transform duration-300" /> {/* Hover effect */}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      <img src={img9} alt="Image 3" className="w-80 h-80 mx-auto my-2 transform hover:scale-105 transition-transform duration-300" /> {/* Hover effect */}
                    </td>
                    <td className="p-2">
                      <img src={img10} alt="Image 4" className="w-80 h-80 mx-auto my-2 transform hover:scale-105 transition-transform duration-300" /> {/* Hover effect */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ImageGallery;
