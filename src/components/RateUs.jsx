import { useId } from "react";

const FORMS_URL = "https://forms.gle/NACdyWuWjdZhRAY57";
const CWS_URL =
  "https://chromewebstore.google.com/detail/picture-compressor/nodbdfcbkkedigollfldkkjjfjkjnjpb/reviews";

const RateUs = () => {
  return (
    <>
      <hr className="border-0 border-t-4 border-[#bbb] opacity-25" />
      <p className="text-center font-sans text-[16px]">Rate us:</p>
      <div className="full-stars text-center">
        <div className="rating-group inline-flex relative">
          <input
            name="fst"
            value="5"
            type="radio"
            disabled
            checked
            className="absolute left-[-9999px]"
          />
          <Star value={1} href={FORMS_URL} />
          <Star value={2} href={FORMS_URL} />
          <Star value={3} href={FORMS_URL} />
          <Star value={4} href={CWS_URL} />
          <Star value={5} href={CWS_URL} />
        </div>
      </div>
    </>
  );
};

const Star = ({ href, value }) => {
  const id = useId();

  return (
    <>
      <label htmlFor={id} className="m-0 cursor-pointer">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="mx-[2px] my-[2px] h-[30px] w-[30px] fill-[#ff8400] transition-colors duration-300 group-hover:fill-[#ff8400] peer-checked:fill-[#ffc711] hover:fill-[#ffc711]"
          >
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
          </svg>
        </a>
      </label>
      <input
        name="fst"
        id={id}
        value={value}
        type="radio"
        className="peer absolute left-[-9999px]"
      />
    </>
  );
};

export default RateUs;
