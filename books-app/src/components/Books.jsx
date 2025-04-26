import { OrderButton } from "./OrderButton";
import "./Books.css";

export const Books = ({ myimage, mytitle }) => {
  return (
    <div className="one-book">
      <img src={myimage} alt="" />
      <h2 className="main-heading">{mytitle}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        dolore aliquid totam. Exercitationem modi deleniti eaque et illum
        aliquid aspernatur repellendus, fugit iure, reiciendis earum pariatur,
        perferendis obcaecati cum. Iste?
      </p>
      <OrderButton />
    </div>
  );
};
