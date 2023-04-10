import { useState, useEffect } from 'react';

function StackedCards(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [topY, setTopY] = useState();
  const [topX, setTopX] = useState();
  const [bottomY, setBottomY] = useState();
  const [bottomX, setBottomX] = useState();
  const [bottomZ, setBottomZ] = useState();
  const [transitionStatus, setTransitionStatus] = useState('notDone');

  useEffect(() => {
    if (isClicked) {
      setTransitionStatus('notDone');
      setTopY("translate-y-96");
      setTopX("translate-x-4");

      setBottomY("translate-y-[-8px]");
      setBottomX("translate-x-[-8px]");

      setTimeout(() => {
        setBottomZ("z-10");
      }, 300);

      setTimeout(() => {
        setTopY("translate-y-4");
      }, 450);

      setTimeout(() => {
        setTransitionStatus('done');
      }, 500);
    } else {
      setTransitionStatus('notDone');
      setTopY("translate-y-96");
      setBottomY("translate-y-2");
      setBottomX("translate-x-2");
      setTimeout(() => {
        setBottomZ("z-0");
      }, 100);

      setTimeout(() => {
        setTopY("translate-y-0");
        setTopX("translate-x-0");
      }, 500);

      setTimeout(() => {
        setTransitionStatus('done');
      }, 600);
    }
  }, [isClicked]);

  function handleClick() {
    if (transitionStatus === 'notDone') {
      return;
    }
    setIsClicked(!isClicked);
  }

  return (
    <div className="relative w-80 h-96 mx-10 my-10" onClick={handleClick}>
      <div
        className={`absolute h-full w-full left-2 top-2 bg-white rounded-lg  transition-all duration-500 transform border-2 ${bottomZ} ${bottomY} ${bottomX} cursor-pointer`}
      >
        <div className="flex flex-col items-center  h-full w-full  rounded-xl p-4 ">
                <div className="font-bold text-3xl">{props.cardTitle}</div>
                <div className=" text-1xl">{props.children}</div>
        </div>
      </div>
      <div
        className={`absolute h-full w-full rounded-lg bg-white  transition-all duration-500 transform border-2 ${topY} ${topX} cursor-pointer`}
      >
        <div className="flex flex-col items-center justify-center h-full w-full  rounded-xl p-4 ">
                <div className="font-bold text-3xl">{props.cardTitle}</div>
                <img className="h-full w-full rounded-xl object-contain " src={props.backgroundImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default StackedCards;