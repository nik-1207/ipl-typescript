import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { subscribe } from "../config/PubSub";
import { LoadingEvent } from "../event/LoadingEvent";

export default function CustomLoader() {
  const [loading, setloading] = useState<boolean>();
  useEffect(() => {
    const handle = subscribe(LoadingEvent, (isLoading: boolean) => {
      setloading(isLoading);
    });
    return () => {
      handle.unsubscribe();
    };
  }, []);

  return (
    <>
      {loading && (
        <div className={"loader"}>
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      )}
    </>
  );
}
