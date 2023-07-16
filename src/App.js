import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: process.env.PUBLIC_URL + "/UnityBuild/build.loader.js",
    dataUrl: process.env.PUBLIC_URL + "/UnityBuild/build.data",
    frameworkUrl: process.env.PUBLIC_URL + "/UnityBuild/build.framework.js",
    codeUrl: process.env.PUBLIC_URL + "/UnityBuild/build.wasm",
  });

  return (
    <div>
      <Unity
        unityProvider={unityProvider}
        style={{
          height: "800px",
          width: "800px",
          border: "2px solid black",
          background: "grey",
        }}
      />
    </div>
  );
}

export default App;
