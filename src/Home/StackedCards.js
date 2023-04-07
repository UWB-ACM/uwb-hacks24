import { useState, useEffect } from 'react';

function StackedCards(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [topY, setTopY] = useState(0);
  const [topX, setTopX] = useState(0);
  const [bottomZ, setBottomZ] = useState(0);
  const [transitionStatus, setTransitionStatus] = useState('notDone');

  useEffect(() => {
    if (isClicked) {
      setTransitionStatus('notDone');
      setTopY(96);
      setTopX(4);

      setTimeout(() => {
        setBottomZ(10);
      }, 300);

      setTimeout(() => {
        setTopY(4);
      }, 450);

      setTimeout(() => {
        setTransitionStatus('done');
      }, 500);
    } else {
      setTransitionStatus('notDone');
      setTopY(96);

      setTimeout(() => {
        setBottomZ(0);
      }, 100);

      setTimeout(() => {
        setTopY(0);
        setTopX(0);
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
        className={`absolute h-full w-full left-2 top-2 bg-white rounded-lg shadow-lg transition-all duration-500 transform border-2 z-${bottomZ}`}
      >
        
        <div className="flex flex-col items-center  h-full w-full bg-white rounded-xl p-4 ">
                <div className="font-bold text-3xl">{props.cardTitle}</div>
                <div className=" text-1xl">{props.children}</div>
        </div>
      </div>
      <div
        className={`absolute h-full w-full rounded-lg bg-white shadow-lg transition-all duration-500 transform border-2 translate-y-${topY} translate-x-${topX}`}
      >
        <div className="flex flex-col items-center justify-center h-full w-full bg-white rounded-xl p-4 ">
                <div className="font-bold text-3xl">{props.cardTitle}</div>
                <img className="h-full w-full rounded-xl object-contain " src={props.backgroundImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default StackedCards;
