import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "physhim/UnityBuild/build.loader.js",
    dataUrl: "physhim/UnityBuild/build.data",
    frameworkUrl: "physhim/UnityBuild/build.framework.js",
    codeUrl: "physhim/UnityBuild/build.wasm",
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
