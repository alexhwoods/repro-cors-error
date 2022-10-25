import { Style } from "@makeswift/runtime/controls";
import { ReactRuntime } from "@makeswift/runtime/react";
import { useEffect } from "react";

// Register your components here!

function HelloWorld(props: { className?: string }) {
  const x = useEffect(() => {
    const y = fetch("https://eoyvdiswa21sakm.m.pipedream.net", {
      headers: { "x-alex-foo": "bar" },
    });

    console.log(`y: ${JSON.stringify(y, null, 2)}`);
  });
  return <p {...props}>Hello, world!</p>;
}

ReactRuntime.registerComponent(HelloWorld, {
  type: "hello-world",
  label: "Hello, world!",
  props: {
    className: Style({ properties: Style.All }),
  },
});
