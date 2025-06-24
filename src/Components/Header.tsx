const Header = () => {
  return (
    <div className="flex w-full items-center justify-between bg-red-500 p-[16px]">
      <div className="flex gap-5">
        <div>logo</div>
        <div>
          <span>nav1</span>
          <span>nav2</span>
          <span>nav3</span>
        </div>
      </div>
      <div>tools</div>
    </div>
  );
};

export default Header;
