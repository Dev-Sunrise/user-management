const Form = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  lodingLogin,
}) => {
  return (
    <form autoComplete="off" className="flex flex-col gap-y-[30px]">
      <div className="flex flex-col gap-y-[10px]">
        <label htmlFor="email" className="inline-block font-bold">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          id="email"
          placeholder="Enter your email..."
          className="px-[10px] py-[5px] border border-colorGray rounded-md  transition-all w-full "
        />
      </div>
      <div className="flex flex-col gap-y-[10px]">
        <label htmlFor="password" className="inline-block font-bold">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          id="password"
          placeholder="Enter your password..."
          className="px-[10px] py-[5px] border border-colorGray rounded-md  transition-all w-full "
        />
      </div>
      <button
        onClick={handleLogin}
        type="button"
        className="w-full h-[44px] hover:opacity-80 transition-all text-white font-bold capitalize bg-colorPrimary rounded-md"
      >
        {lodingLogin ? (
          <div class="dot-flasing">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
};

export default Form;
