import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "UnityBuild/build.loader.js",
    dataUrl: "UnityBuild/build.data",
    frameworkUrl: "UnityBuild/build.framework.js",
    codeUrl: "UnityBuild/build.wasm",
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
