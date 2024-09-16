import { PaperScope } from 'paper/dist/paper-core';
import React, { useState, useEffect, useRef } from 'react';

export const MyCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paperScope] = useState(new PaperScope());

  useEffect(() => {
    if(!canvasRef.current) return;
    paperScope.setup(canvasRef.current);
    const circle = new paperScope.Path.Circle({
      center: [80, 50],
      radius: 35,
      fillColor: 'black'
    });

    // @ts-ignore
    paperScope.view.draw();
  }, [paperScope]);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};