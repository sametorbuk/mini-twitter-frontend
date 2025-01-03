export default function SignUpPage() {
  const footerLinks: string[] = [
    "About",
    "Help Center",
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Ads info",
    "Blog",
    "Status",
    "Carrers",
    "Brand Resources",
    "Advertising",
    "Marketing",
    "Twitter for Business",
    "Developers",
    "Directory",
    "Settings",
    "© 2021 Twitter, Inc.",
  ];

  return (
    <>
      <div className="flex h-[96vh]">
        <img className="w-[55%] " src="./images/back-twitter.png" alt="" />
        <div className="flex flex-col py-[8rem] px-[4rem] w-[45%] gap-[2.5rem] bg-white">
          <img className="w-[4rem]" src="./images/twitter-logo.png" alt="" />
          <h1 className="font-bold text-6xl">Happening Now</h1>
          <h3 className="font-bold text-3xl">Join Twitter Today</h3>

          <div className="flex flex-col gap-[1rem]">
            <button className="btn">
              <img className="w-[2rem]" src="./images/logo-google.png" alt="" />
              <p>Signup with google </p>
            </button>
            <button className="btn">
              <img
                className="w-[1.8rem] mr-[0.2rem]"
                src="./images/apple-logo.svg"
                alt=""
              />
              <p>Signup with Apple</p>
            </button>
            <button className="btn">Signup with phone or email</button>
          </div>

          <div class="text-left font-bold text-sm text-gray-600 w-[20rem]">
            <p>
              By signing up you agree to the
              <a href="#" class="text-blue-500 hover:underline">
                Terms of Service
              </a>{" "}
              and
              <a href="#" class="text-blue-500 hover:underline">
                Privacy Policy
              </a>
              , including
              <a href="#" class="text-blue-500 hover:underline">
                Cookie Use
              </a>
              .
            </p>
            <p class="mt-4">
              Already have an account?
              <a href="#" class="text-blue-500 hover:underline font-medium">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[0.7rem] text-gray-500 font-bold justify-center">
        {footerLinks.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </>
  );
}
