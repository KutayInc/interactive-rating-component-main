import { useState } from "react";
import "./App.css";
import icon from "../images/icon-star.svg";
import thankIcon from "../images/illustration-thank-you.svg";

function Rate(props) {
  const [active, setActive] = useState(null);
  const handleDivClick = (index) => {
    setActive(index);
    props.setValue(index + 1);
  };
  return (
    <div className="flex mb-5">
      {[...Array(5).keys()].map((index) => (
        <div
          key={index}
          className={
            active === index
              ? "rounded-full bg-mediumGrey w-12 h-12 md:w-14 md:h-14 " +
                "items-center justify-center flex mx-auto hover:bg-orange text-lg" +
                "md:text-xl text-white hover:text-white cursor-pointer md:"
              : "rounded-full bg-lightBlue w-12 h-12 md:w-14 md:h-14 " +
                "items-center justify-center flex mx-auto hover:bg-orange text-lg" +
                "md:text-xl text-lightGrey hover:text-white cursor-pointer "
          }
          onClick={() => handleDivClick(index)}
        >
          <p className="pointer-none">{index + 1}</p>
        </div>
      ))}
    </div>
  );
}

function RatePage(props) {
  return (
    <div className="mx-5 md:mx-auto md:h-5/12 md:w-1/4 bg-darkBlue rounded-xl p-10 flex flex-col justify-between">
      <div
        className="rounded-full bg-lightBlue w-14 h-14 
        items-center justify-center flex mb-7"
      >
        <img src={icon} alt="" />
      </div>
      <div className="mb-5 font-bold">
        <h1 className="text-2xl text-white"> How did we do?</h1>
      </div>
      <div className="mb-5 pr-2">
        <p className="text-base text-lightGrey">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <Rate setValue={props.setValue} />
      <div>
        <button
          className="rounded-3xl w-full bg-orange h-12 text-white 
          font-bold hover:bg-white hover:text-orange "
          onClick={props.func}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

function ThankPage(props) {
  return (
    <div className="mx-5 md:mx-auto md:h-5/12 md:w-1/4 bg-darkBlue rounded-xl p-10 flex flex-col justify-between items-center">
      <div className="m-5">
        <img src={thankIcon} alt="" />
      </div>
      <div className="m-5 bg-lightBlue py-2 px-5 rounded-3xl">
        <p className="text-orange">You selected {props.value} out of 5</p>
      </div>
      <div className="m-5">
        <h1 className="text-2xl text-white font-bold">Thank You!</h1>
      </div>
      <div className="mb-5">
        <p className="text-lightGrey text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

function App() {
  const [submit, setSubmit] = useState(false);
  const [value, setValue] = useState(0);
  function submitFunc() {
    setSubmit((prev) => !prev);
    console.log(submit);
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      {submit ? (
        <ThankPage value={value} />
      ) : (
        <RatePage func={submitFunc} setValue={setValue} />
      )}
    </div>
  );
}

export default App;
