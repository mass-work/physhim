import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "https://mass-work.github.io/physhim/UnityBuild/build.loader.js",
    dataUrl:
      "https://github.com/mass-work/physhim/blob/main/public/UnityBuild/build.data",
    frameworkUrl:
      "https://github.com/mass-work/physhim/blob/main/public/UnityBuild/build.framework.js",
    codeUrl:
      "https://github.com/mass-work/physhim/blob/main/public/UnityBuild/build.wasm",
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
