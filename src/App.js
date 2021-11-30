import React, { useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const App = () => {
  let arrayOfInputRefs = useRef([]);
  // useEffect(() => {
  [0, 1].map(
    (ref, index) => (arrayOfInputRefs.current[ref] = React.createRef())
  );
  // }, []);
  const onCrop = (i) => {
    const imageElement = arrayOfInputRefs.current[i]?.current;
    const cropper = imageElement?.cropper;
    console.log(cropper);
  };

  const handleRotateCW = (i) => {
    const imageElement = arrayOfInputRefs.current[i]?.current;
    const cropper = imageElement?.cropper;
    cropper.rotate(45);
    console.log(cropper);
    // arrayOfInputRefs.current[i]?.current?.cropper?.rotate(120);
  };
  const handleRotateACW = (i) => {
    const imageElement = arrayOfInputRefs.current[i]?.current;
    const cropper = imageElement?.cropper;
    cropper.rotate(-45);
    // arrayOfInputRefs.current[i]?.current?.cropper?.rotate(120);
  };

  const handleZoomIn = (i) => {
    const imageElement = arrayOfInputRefs.current[i]?.current;
    const cropper = imageElement?.cropper;
    cropper.zoom(0.1);
  };
  const handleZoomOut = (i) => {
    const imageElement = arrayOfInputRefs.current[i]?.current;
    const cropper = imageElement?.cropper;
    cropper.zoom(-0.1);
  };

  const getCropBoxData = (i) => {
    const imageElement = arrayOfInputRefs.current[i]?.current;
    const cropper = imageElement?.cropper;
    cropper.getCropBoxData();
    console.log(cropper.getCropBoxData());
  };
  const handleClear = (i) => {
    const imageElement = arrayOfInputRefs.current[i]?.current;
    const cropper = imageElement?.cropper;
    cropper.clear();
  };

  return (
    <div>
      {[0, 1].map((item, index) => {
        return (
          <div key={index}>
            <Cropper
              key={index}
              className="cropperContainer"
              src="https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"
              style={{ height: 200, width: 200, margin: "1rem" }}
              initialAspectRatio={16 / 4}
              guides={false}
              checkCrossOrigin={false}
              crop={() => onCrop(item)}
              autoCrop={false}
              ref={arrayOfInputRefs.current[item]}
              zoomOnWheel={false}
              viewMode={1}
              restore={true}
            />
            <div>
              <button onClick={() => handleRotateCW(item)}>Rotate CW</button>
              <button onClick={() => handleRotateACW(item)}>Rotate ACW</button>
              <button onClick={() => handleZoomIn(item)}>Zoom In</button>
              <button onClick={() => handleZoomOut(item)}>Zoom Out</button>
              <button onClick={() => getCropBoxData(item)}>
                Get CropBox Data
              </button>
              <button onClick={() => handleClear(item)}>Clear</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default App;
