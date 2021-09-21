import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { LoadingEvent } from "../event/LoadingEvent";
import { subscribe } from "../config/PubSub";

export default function CustomLoader() {
  const [loading, setloading] = useState();
  useEffect(() => {
    const handle = subscribe(LoadingEvent, (args: any) => {
      setloading(args.isLoading);
    });
    return () => {
      handle.unsubscribe();
    };
  }, []);

  return (
    <>
      {loading && (
        <div className={"loader"}>
            <Loader
          type="TailSpin"
          color="#00BFFF"
          height={80}
          width={80}
        />
        </div>
      )}
    </>
  );
}
