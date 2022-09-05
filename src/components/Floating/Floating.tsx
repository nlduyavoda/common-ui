import "./Floating.scss";
type FloatingType = {
  Icon?: any;
};
export const Floating = (props: FloatingType) => {
  return <div className="floatingWrapper">{props.Icon}</div>;
};
