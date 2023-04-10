function SponsorCard(props) {
  return (
    <div className="relative w-80 h-48 mx-10 my-10">
      <div
        className={`absolute h-full w-full rounded-lg bg-white  transition-all duration-500 transform border-2`}
      >
        <div className="flex flex-col items-center justify-center h-full w-full  rounded-xl p-4 ">
                <img className="h-full w-full rounded-xl object-contain " src={props.backgroundImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SponsorCard;