import classNames from "classnames";
import Head from "next/head";
import { useRef, useState } from "react";
function getRandomNum(range: number, pad = 0) {
    return pad + Math.floor(Math.random() * (range - pad * 2));
}
export default function Home() {
    const [state, setState] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const parent = useRef<HTMLDivElement>(null);
    function Move() {
        setState(true);
        setPos({
            x: getRandomNum(100, 5),
            y: getRandomNum(100, 5),
        });
    }
    return (
        <>
            <Head>
                <title>Failure Test</title>
            </Head>
            <div
                ref={parent}
                className="relative min-h-screen"
            >
                <div className="w-fit mx-auto">
                    <p className="text-lg font-semibold mb-2">
                        Are you a failure?
                    </p>
                    <div className="flex justify-between select-none">
                        <button
                            onClick={() => {
                                alert("You Are a failure !");
                            }}
                        >
                            Yes
                        </button>
                        <button
                            onClick={() => {
                                alert("you are not a failure");
                            }}
                            onMouseEnter={Move}
                            onTouchStart={Move}
                            className={classNames({
                                absolute: state,
                                static: !state,
                            })}
                            style={{
                                left: `${pos.x}%`,
                                top: `${pos.y}%`,
                            }}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
