import React from 'react';
import './Home.css';

function TrackCard(props) {
    return (
      <div className="items-center justify-center bg-slate-100 pt-2 pb-3 pl-4 pr-4">
        <div className="group h-96 w-80 [perspective:1000px]">
          <div className="border-1 rounded-xl relative h-full w-full rounded-xltransition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img className="h-full w-full rounded-xl object-contain opacity-40" src={props.backgroundImage} alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
              <div className="flex flex-col items-center justify-center h-full w-full bg-white rounded-xl p-4">
              <div className="font-bold text-3xl">{props.cardTitle}</div>
              <img className="h-full w-full rounded-xl object-contain " src={props.backgroundImage} alt="" />
              </div>
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="pt-4 min-h-full flex-col items-center justify-center">
                <div className="font-bold text-3xl pb-2 text-center ">{props.cardTitle}</div>
                <div className="text-1xl text-left">{props.children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default TrackCard
