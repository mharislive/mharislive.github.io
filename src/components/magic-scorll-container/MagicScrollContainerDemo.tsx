import MagicScrollContainer from "./MagicScrollContainer";

const COLORS = ["orange", "yellow", "green", "purple", "fuchsia", "pink"];

const COLOR_CLASSES = COLORS.map((color) => `bg-${color}-500`);

const Sample = () => {
  return (
    <>
      <div className="h-20 flex justify-center items-center border-8">
        Random container with no data color attribute
      </div>
      <div className="h-30 flex justify-center items-center border-8">
        Random container with no data color attribute
      </div>
      <div className="h-60 flex justify-center items-center border-8">
        Random container with no data color attribute
      </div>
      {COLOR_CLASSES.map((item, index) => (
        <div
          className="test h-screen flex justify-center items-center border-8"
          data-color={item}
          key={index}
        >
          {item.toUpperCase()}
        </div>
      ))}
      <div className="h-screen flex justify-center items-center border-8">
        Random container with no data color attribute
      </div>
    </>
  );
};

const MagicScrollContainerDemo = () => {
  return (
    <MagicScrollContainer>
      <Sample />
    </MagicScrollContainer>
  );
};

export default MagicScrollContainerDemo;
