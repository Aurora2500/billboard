import { useEffect, useRef } from 'react'

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const gl = canvasRef.current!.getContext("webgl");
    if (gl === null) {
      alert("Unable to initialize WebGL.");
      return;
    }

    const draw = (gl: WebGLRenderingContext) => {
      gl.clearColor(1, 0, 0, 1);
    };

    const render = () => {
      draw(gl);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render)
  }, [])

  return (
    <div
      className='w-full h-screen flex'
    >
      <canvas ref={canvasRef}
        className='bg-green-900 w-4/5 h-screen'
      />
      <div className='bg-slate-600 h-screen w-1/5'>

      </div>
    </div>
  )
}

export default App
