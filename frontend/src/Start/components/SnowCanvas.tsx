/**@jsxImportSource @emotion/react */
import React, { useRef, useEffect } from "react";
import WhiteStone from "../../assets/whiteStone.svg";
import BlackStone from "../../assets/BlackStone.svg";
import styled from "@emotion/styled/macro";

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const TransparentCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  opacity: 0.5;
`;

const SnowCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let ctx: CanvasRenderingContext2D | null = null;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;

    const getRandomRadius = () => Math.random() * 1 + 0.5;
    const getRandomSpeed = () => Math.random() * 0.3 + 0.1;
    const getRandomDir = () => [-1, 1][Math.floor(Math.random() * 2)];

    const data: {
      x: number;
      y: number;
      size: number;
      speed: number;
      dir: number;
    }[] = [];
    const randomValue = Math.random() < 0.5 ? 0 : 1;

    const imageSrc = randomValue === 0 ? WhiteStone : BlackStone;

    const image = new Image();

    image.onload = () => {
      const makeSnow = () => {
        for (let i = 0; i < 200; i++) {
          const x = Math.random() * canvasWidth;
          const y = Math.random() * canvasHeight;

          const size = getRandomRadius();
          const speed = getRandomSpeed();
          const dir = getRandomDir();

          data.push({ x, y, size, speed, dir });
        }
      };

      const moveSnow = () => {
        data.forEach((item) => {
          item.x += item.dir * item.speed;
          item.y += item.speed;

          if (-item.size > item.x || item.x > canvasWidth) {
            item.dir *= -1;
          }
          if (item.y > canvasHeight) {
            item.y = -item.size;
          }
        });
      };

      const drawSnow = () => {
        if (!ctx) return;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = "#0f1018";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        data.forEach((item) => {
          if (!ctx) return;
          ctx.beginPath();
          ctx.drawImage(image, item.x, item.y, item.size, item.size);
          ctx.closePath();
        });
      };

      const loop = () => {
        moveSnow();
        drawSnow();
        requestAnimationFrame(loop);
      };

      makeSnow();
      loop();
    };
    image.src = imageSrc;
    window.onresize = () => {
      if (!canvasRef.current) return;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    return () => {
      window.onresize = null;
    };
  }, []);

  return (
    <div
      css={{
        opacity: 0.55,
        mixBlendMode: "darken",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -50,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "50vw",
        height: "50vh",
        minWidth: "50vw",
        minHeight: "50vh",
      }}
    >
      <canvas ref={canvasRef} />;
    </div>
  );
};

export default SnowCanvas;
